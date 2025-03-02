"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { years, subjects, topics, difficulties, Subject, Difficulty } from "@/lib/data";

export function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [year, setYear] = useState<string>(searchParams.get("year") || "all");
  const [subject, setSubject] = useState<Subject | "all">(searchParams.get("subject") as Subject || "all");
  const [topic, setTopic] = useState<string>(searchParams.get("topic") || "all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">(searchParams.get("difficulty") as Difficulty || "all");
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get("search") || "");
  
  const availableTopics = subject !== "all" ? topics[subject] : [];

  useEffect(() => {
    // Reset topic when subject changes
    if (subject !== "all" && topic !== "all" && !topics[subject].includes(topic)) {
      setTopic("all");
    }
  }, [subject, topic]);

  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (year !== "all") params.set("year", year);
    if (subject !== "all") params.set("subject", subject);
    if (topic !== "all") params.set("topic", topic);
    if (difficulty !== "all") params.set("difficulty", difficulty);
    if (searchQuery) params.set("search", searchQuery);
    
    router.push(`/?${params.toString()}`);
  };

  const clearFilters = () => {
    setYear("all");
    setSubject("all");
    setTopic("all");
    setDifficulty("all");
    setSearchQuery("");
    router.push("/");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      applyFilters();
    }
  };

  return (
    <div className="bg-card p-4 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map((y) => (
                <SelectItem key={y} value={y.toString()}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={subject} onValueChange={(value) => setSubject(value as Subject | "all")}>
            <SelectTrigger>
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              {subjects.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select 
            value={topic} 
            onValueChange={setTopic}
            disabled={subject === "all"}
          >
            <SelectTrigger>
              <SelectValue placeholder="Topic" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Topics</SelectItem>
              {availableTopics.map((t) => (
                <SelectItem key={t} value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select value={difficulty} onValueChange={(value) => setDifficulty(value as Difficulty | "all")}>
            <SelectTrigger>
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              {difficulties.map((d) => (
                <SelectItem key={d} value={d}>
                  {d}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      
      <div className="flex justify-end mt-4 gap-2">
        <Button variant="outline" onClick={clearFilters} className="gap-1">
          <X className="h-4 w-4" /> Clear
        </Button>
        <Button onClick={applyFilters}>Apply Filters</Button>
      </div>
    </div>
  );
}