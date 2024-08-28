const assessment = [
  {
    id: "64f2eaf1b39b540001234575",
    title: "Math Quiz 1",
    instructions: ["Complete all questions", "No calculators allowed"],
    type: "quiz",
    questions: ["64f2eaf1b39b540001234601", "64f2eaf1b39b540001234602"],
    created_by: "64d2eaf1b39b540001234571",
    created_at: new Date().toISOString(),
    visibility: "all",
    start_date: new Date().toISOString(),
    start_time: new Date().toISOString(),
    end_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    end_time: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    publish_type: "immediate",
  },
];
const questionBank = [
  {
    questions: ["64f2eaf1b39b540001234601", "64f2eaf1b39b540001234602"],
  },
];

const question = {
  id: "64f2eaf1b39b540001234601",
  question: "What is 2 + 2?",
  options: ["2", "3", "4", "5"],
  correctAnswer: "4",
};
