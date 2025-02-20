import { Role} from "@prisma/client";

// auth.d.ts
declare module '#auth-utils' {
  interface User {
    id: string;
    address: string;
    name: string;
    email: string;
    phone: string;
    role: Role;
  }

  interface UserSession {
    // Add your own fields
     user: User & { id: string; role: Role };
        token: { id: string; role: Role, name: string };
  }

  interface SecureSessionData {
    // Add your own fields
  }
}

export {}
