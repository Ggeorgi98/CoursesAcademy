export default interface CourseModel {
    id: number;
    title: string;
    description: string;
    rating: number;
    assigneeId: number[];
}