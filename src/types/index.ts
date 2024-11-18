export type UserRole = 'student' | 'club_admin' | 'faculty' | 'super_admin';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  joinedClubs: string[];
}

export interface Club {
  id: string;
  name: string;
  description: string;
  adminId: string;
  facultyCoordinatorId: string;
  members: string[];
  createdAt: Date;
}

export interface Event {
  id: string;
  clubId: string;
  title: string;
  description: string;
  date: Date;
  location: string;
  capacity: number;
  isApproved: boolean;
  approvedBy?: string;
  rsvps: string[];
  createdAt: Date;
}