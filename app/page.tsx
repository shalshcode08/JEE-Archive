import { Suspense } from "react";
import { Header } from "@/components/header";
import { Filters } from "@/components/filters";
import { QuestionCard } from "@/components/question-card";
import { getFilteredQuestions, Subject, Difficulty } from "@/lib/data";

export default function Home({
  searchParams,
}: {
  searchParams: { 
    year?: string; 
    subject?: string; 
    topic?: string; 
    difficulty?: string;
    search?: string;
  };
}) {
  const year = searchParams.year ? parseInt(searchParams.year) : undefined;
  const subject = searchParams.subject as Subject | undefined;
  const topic = searchParams.topic;
  const difficulty = searchParams.difficulty as Difficulty | undefined;
  const searchQuery = searchParams.search;

  const questions = getFilteredQuestions({
    year,
    subject,
    topic,
    difficulty,
    searchQuery,
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container py-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            JEE Mains Questions
          </h2>
          <p className="text-muted-foreground">
            Browse through the last 10 years of JEE Mains exam questions. Filter by year, subject, topic, and difficulty.
          </p>
        </div>

        <Suspense fallback={<div>Loading filters...</div>}>
          <Filters />
        </Suspense>

        <div className="space-y-4">
          {questions.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">
                  Showing {questions.length} question{questions.length !== 1 ? 's' : ''}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {questions.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No questions found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search query to find questions.
              </p>
            </div>
          )}
        </div>
      </main>
      <footer className="border-t py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} JEE Mains Questions Archive. All rights reserved.
        </div>
      </footer>
    </div>
  );
}