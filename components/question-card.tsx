"use client";

import { useState } from "react";
import { Question } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const isCorrect = selectedOption === question.correctAnswer;
  const hasAnswered = selectedOption !== null;

  return (
    <Card className="w-full mb-6">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col space-y-1.5">
          <h3 className="font-semibold leading-none tracking-tight">
            {question.year} • {question.subject}
          </h3>
          <div className="flex gap-2">
            <Badge variant="outline">{question.topic}</Badge>
            <Badge 
              variant="outline" 
              className={
                question.difficulty === "Easy" 
                  ? "bg-green-100 dark:bg-green-900" 
                  : question.difficulty === "Medium" 
                  ? "bg-yellow-100 dark:bg-yellow-900" 
                  : "bg-red-100 dark:bg-red-900"
              }
            >
              {question.difficulty}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-base mb-4">{question.question}</p>
        <div className="space-y-2">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedOption === option ? (isCorrect ? "default" : "destructive") : "outline"}
              className="w-full justify-start text-left h-auto py-3 px-4"
              onClick={() => handleOptionSelect(option)}
              disabled={hasAnswered && selectedOption !== option}
            >
              <span className="mr-2">{String.fromCharCode(65 + index)}.</span>
              {option}
              {hasAnswered && option === question.correctAnswer && (
                <CheckCircle className="ml-auto h-5 w-5 text-green-500" />
              )}
              {hasAnswered && selectedOption === option && !isCorrect && (
                <XCircle className="ml-auto h-5 w-5 text-red-500" />
              )}
            </Button>
          ))}
        </div>
        {hasAnswered && showExplanation && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <h4 className="font-medium mb-2">Explanation:</h4>
            <p>{question.explanation}</p>
          </div>
        )}
      </CardContent>
      {hasAnswered && (
        <CardFooter>
          <Button 
            variant="outline" 
            onClick={() => setShowExplanation(!showExplanation)}
            className="w-full"
          >
            {showExplanation ? "Hide Explanation" : "Show Explanation"}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}