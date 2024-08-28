type Role = "student" | "teacher";
type Stream = "Computer Science" | "Mathematics" | "Physics" | "Chemistry";
type Access = "private" | "all" | "specific";

export enum AssessmentType {
  quiz = "quiz",
  assignment = "assignment",
  survey = "survey",
}
enum VisibilityType {
  private = "private",
  all = "all",
  specificGroup = "specific-group",
}
enum PublishType {
  immediate = "immediate",
  after_graded = "after_graded",
}
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  age?: number; // Optional, specific to students
  stream?: Stream; // Optional, specific to students
  subject?: string; // Optional, specific to teachers
  yearsOfExperience?: number; // Optional, specific to teachers
};

type Question = {
  id: string;
  question: string;
  options?: string[]; // Optional for multiple-choice questions
  correctAnswer?: string; // Optional, to store the correct answer if needed
};

type AssessmentStateType = {
  id: string;
  title: string;
  instructions: string[];
  type: AssessmentType;
  questions: string[]; // Array of question IDs
  created_by: string; // User id (teacher)
  created_at: string;
  visibility: VisibilityType;
  specific_major?: Stream;
  access?: Access;
  access_list?: Stream[];
  start_date: string;
  start_time: string;
  end_date: string;
  end_time: string;
  publish_type: PublishType;
};

// Dummy data for users
const users: User[] = [
  {
    id: "64d2eaf1b39b540001234567",
    name: "John Doe",
    email: "johndoe@example.com",
    role: "student",
    age: 20,
    stream: "Computer Science",
    password: "test123",
  },
  {
    id: "64d2eaf1b39b540001234568",
    name: "Jane Smith",
    email: "janesmith@example.com",
    role: "student",
    age: 22,
    stream: "Mathematics",
    password: "test123",
  },
  {
    id: "64d2eaf1b39b540001234569",
    name: "Emily Johnson",
    email: "emilyjohnson@example.com",
    role: "student",
    age: 21,
    stream: "Physics",
    password: "test123",
  },
  {
    id: "64d2eaf1b39b540001234570",
    name: "Michael Brown",
    email: "michaelbrown@example.com",
    role: "student",
    age: 23,
    stream: "Chemistry",
    password: "test123",
  },
  {
    id: "64d2eaf1b39b540001234571",
    name: "Alice Johnson",
    email: "alicejohnson@example.com",
    role: "teacher",
    subject: "Mathematics",
    yearsOfExperience: 10,
    password: "test123",
  },
  {
    id: "64d2eaf1b39b540001234572",
    name: "Robert Williams",
    email: "robertwilliams@example.com",
    role: "teacher",
    subject: "Physics",
    yearsOfExperience: 15,
    password: "test123",
  },
  {
    id: "64d2eaf1b39b540001234573",
    name: "Mary Davis",
    email: "marydavis@example.com",
    role: "teacher",
    subject: "Chemistry",
    yearsOfExperience: 8,
    password: "test123",
  },
  {
    id: "64d2eaf1b39b540001234574",
    name: "James Wilson",
    email: "jameswilson@example.com",
    role: "teacher",
    subject: "Computer Science",
    yearsOfExperience: 12,
    password: "test123",
  },
];

// Dummy data for questions
const questions: Question[] = [
  {
    id: "64f2eaf1b39b540001234601",
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "4",
  },
  {
    id: "64f2eaf1b39b540001234602",
    question: "Solve the equation: 3x + 5 = 20",
    options: ["x = 3", "x = 5", "x = 7", "x = 10"],
    correctAnswer: "x = 5",
  },
  {
    id: "64f2eaf1b39b540001234603",
    question: "Explain Newton's First Law of Motion.",
  },
  {
    id: "64f2eaf1b39b540001234604",
    question: "Describe the concept of inertia.",
  },
];

// Dummy data for assessments
const assessments: AssessmentStateType[] = [
  {
    id: "64f2eaf1b39b540001234575",
    title: "Math Quiz 1",
    instructions: ["Complete all questions", "No calculators allowed"],
    type: AssessmentType.quiz,
    questions: ["64f2eaf1b39b540001234601", "64f2eaf1b39b540001234602"],
    created_by: "64d2eaf1b39b540001234571", // Alice Johnson
    created_at: new Date().toISOString(),
    visibility: VisibilityType.all,
    start_date: new Date().toISOString(),
    start_time: new Date().toISOString(),
    end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    end_time: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    publish_type: PublishType.immediate,
  },
  {
    id: "64f2eaf1b39b540001234576",
    title: "Physics Assignment 1",
    instructions: ["Submit by the end of the week", "Include diagrams"],
    type: AssessmentType.assignment,
    questions: ["64f2eaf1b39b540001234603", "64f2eaf1b39b540001234604"],
    created_by: "64d2eaf1b39b540001234572", // Robert Williams
    created_at: new Date().toISOString(),
    visibility: VisibilityType.specificGroup,
    specific_major: "Computer Science",
    start_date: new Date().toISOString(),
    start_time: new Date().toISOString(),
    end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    end_time: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    publish_type: PublishType.after_graded,
  },
  {
    id: "64f2eaf1b39b540001234579",
    title: "Assignment 3",
    instructions: ["Submit by the end of the week", "Include diagrams"],
    type: AssessmentType.assignment,
    questions: ["64f2eaf1b39b540001234603", "64f2eaf1b39b540001234604"],
    created_by: "64d2eaf1b39b540001234573", // Mary Davis
    created_at: new Date().toISOString(),
    visibility: VisibilityType.private,
    start_date: new Date().toISOString(),
    start_time: new Date().toISOString(),
    end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    end_time: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    publish_type: PublishType.after_graded,
  },
];

export type { AssessmentStateType };
export { users, questions, assessments };
