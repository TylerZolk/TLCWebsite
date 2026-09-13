import { neon } from "@neondatabase/serverless";

let sqlClient: ReturnType<typeof neon> | null = null;

function getSql() {
  if (sqlClient) return sqlClient;

  const connectionString =
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL_UNPOOLED;

  if (!connectionString) {
    throw new Error(
      "No database connection string found. Set DATABASE_URL (or POSTGRES_URL) in your environment — see db/schema.sql for setup.",
    );
  }

  sqlClient = neon(connectionString);
  return sqlClient;
}

export type PositionStatus = "open" | "closed";
export type ApplicationStatus = "new" | "reviewed" | "rejected" | "hired";

export interface Position {
  id: number;
  title: string;
  department: string | null;
  location: string | null;
  employment_type: string | null;
  description: string | null;
  status: PositionStatus;
  created_at: string;
}

export interface Application {
  id: number;
  position_id: number | null;
  position_title: string | null;
  full_name: string;
  email: string;
  phone: string | null;
  message: string | null;
  status: ApplicationStatus;
  created_at: string;
}

export async function getOpenPositions(): Promise<Position[]> {
  return (await getSql()`
    SELECT * FROM positions WHERE status = 'open' ORDER BY created_at DESC
  `) as Position[];
}

export async function getAllPositions(): Promise<Position[]> {
  return (await getSql()`
    SELECT * FROM positions ORDER BY created_at DESC
  `) as Position[];
}

export async function createPosition(input: {
  title: string;
  department: string | null;
  location: string | null;
  employmentType: string | null;
  description: string | null;
}): Promise<void> {
  await getSql()`
    INSERT INTO positions (title, department, location, employment_type, description)
    VALUES (${input.title}, ${input.department}, ${input.location}, ${input.employmentType}, ${input.description})
  `;
}

export async function setPositionStatus(
  id: number,
  status: PositionStatus,
): Promise<void> {
  await getSql()`UPDATE positions SET status = ${status} WHERE id = ${id}`;
}

export async function deletePosition(id: number): Promise<void> {
  await getSql()`DELETE FROM positions WHERE id = ${id}`;
}

export async function createApplication(input: {
  positionId: number;
  fullName: string;
  email: string;
  phone: string | null;
  message: string | null;
}): Promise<void> {
  await getSql()`
    INSERT INTO applications (position_id, full_name, email, phone, message)
    VALUES (${input.positionId}, ${input.fullName}, ${input.email}, ${input.phone}, ${input.message})
  `;
}

export async function getApplications(
  positionId?: number,
): Promise<Application[]> {
  if (positionId) {
    return (await getSql()`
      SELECT applications.*, positions.title AS position_title
      FROM applications
      LEFT JOIN positions ON positions.id = applications.position_id
      WHERE applications.position_id = ${positionId}
      ORDER BY applications.created_at DESC
    `) as Application[];
  }
  return (await getSql()`
    SELECT applications.*, positions.title AS position_title
    FROM applications
    LEFT JOIN positions ON positions.id = applications.position_id
    ORDER BY applications.created_at DESC
  `) as Application[];
}

export async function setApplicationStatus(
  id: number,
  status: ApplicationStatus,
): Promise<void> {
  await getSql()`UPDATE applications SET status = ${status} WHERE id = ${id}`;
}
