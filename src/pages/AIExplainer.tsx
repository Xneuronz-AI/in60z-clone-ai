import React, { useState, useEffect } from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Brain,
  Zap,
  BookOpen,
  Lightbulb,
  MousePointer,
  ChevronLeft,
  Share,
  Bookmark,
  MoreVertical,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";

const demoSteps = [
  {
    step: 1,
    action: "Reading paper",
    description: "User opens the research paper on their mobile device",
    duration: 2000,
  },
  {
    step: 2,
    action: "Finding confusing text",
    description: "User encounters complex technical terms",
    duration: 1500,
  },
  {
    step: 3,
    action: "Selecting text",
    description: "User selects 'attention mechanism' for explanation",
    selectedText: "attention mechanism",
    duration: 2000,
  },
  {
    step: 4,
    action: "AI processing",
    description: "In60z AI analyzes the selected text",
    duration: 2500,
  },
  {
    step: 5,
    action: "Showing explanation",
    description: "AI provides clear, simple explanation",
    explanation:
      "This is like having a spotlight that helps the AI focus on the most important parts of the input when making decisions. It's similar to how you might highlight key phrases when studying.",
    duration: 4000,
  },
  {
    step: 6,
    action: "User satisfied",
    description: "User understands the concept and continues reading",
    duration: 2000,
  },
];

const AIExplainer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedText, setSelectedText] = useState("");
  const [explanation, setExplanation] = useState("");
  const [isExplaining, setIsExplaining] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [typingText, setTypingText] = useState("");

  useEffect(() => {
    if (!showDemo) return;

    const step = demoSteps[currentStep];
    if (!step) return;

    const timer = setTimeout(() => {
      switch (step.step) {
        case 3:
          setSelectedText(step.selectedText || "");
          break;
        case 4:
          setIsExplaining(true);
          break;
        case 5:
          setIsExplaining(false);
          if (step.explanation) {
            typeExplanation(step.explanation);
          }
          break;
        case 6:
          // Reset for loop
          setTimeout(() => {
            setCurrentStep(0);
            setSelectedText("");
            setExplanation("");
            setTypingText("");
          }, 2000);
          return;
      }

      if (currentStep < demoSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, step.duration);

    return () => clearTimeout(timer);
  }, [currentStep, showDemo]);

  const typeExplanation = (text: string) => {
    setTypingText("");
    let index = 0;
    const interval = setInterval(() => {
      setTypingText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
        setExplanation(text);
      }
    }, 30);
  };

  const startDemo = () => {
    setShowDemo(true);
    setCurrentStep(0);
  };

  const resetDemo = () => {
    setShowDemo(false);
    setCurrentStep(0);
    setSelectedText("");
    setExplanation("");
    setTypingText("");
    setIsExplaining(false);
  };

  const currentStepData = demoSteps[currentStep];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Welcome Screen */}
      {!showDemo && (
        <main className="container mx-auto px-6 py-8 md:py-12 pt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Mobile AI Research Assistant
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-balance mb-6">
              Experience <span className="text-primary">In60z</span> on Mobile
            </h1>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto mb-8">
              Watch how researchers use In60z on their mobile devices to instantly understand complex papers. This
              automatic demo shows the complete user journey.
            </p>
            <Button
              onClick={startDemo}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
            >
              <MousePointer className="w-5 h-5 mr-2" />
              Watch Mobile Demo
            </Button>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center border-border bg-card">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MousePointer className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Touch & Explain</h3>
              <p className="text-sm text-muted-foreground">
                Simply tap and hold any confusing text to get instant explanations on mobile.
              </p>
            </Card>

            <Card className="p-6 text-center border-border bg-card">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile-Optimized AI</h3>
              <p className="text-sm text-muted-foreground">
                Powerful AI explanations optimized for mobile reading and touch interactions.
              </p>
            </Card>

            <Card className="p-6 text-center border-border bg-card">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Instant Results</h3>
              <p className="text-sm text-muted-foreground">
                Get explanations in under 2 seconds, perfect for mobile research sessions.
              </p>
            </Card>
          </div>
        </main>
      )}

      {/* Mobile App Demo */}
      {showDemo && (
        <main className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-background via-background to-muted/20 pt-24">
          <div className="relative">
            {/* Mobile Device Frame */}
            <div className="w-[375px] h-[812px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                {/* Mobile Status Bar */}
                <div className="flex items-center justify-between px-6 py-2 bg-background text-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">9:41</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Signal className="w-4 h-4" />
                    <Wifi className="w-4 h-4" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                {/* App Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
                  <div className="flex items-center gap-3">
                    <ChevronLeft className="w-6 h-6 text-muted-foreground" />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xs">I6</span>
                      </div>
                      <span className="font-semibold text-sm">In60z</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Share className="w-5 h-5 text-muted-foreground" />
                    <Bookmark className="w-5 h-5 text-muted-foreground" />
                    <MoreVertical className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Paper Content */}
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <div className="mb-4">
                    <Badge className="mb-3 bg-primary/10 text-primary text-xs">
                      <BookOpen className="w-3 h-3 mr-1" />
                      Research Paper
                    </Badge>
                    <h1 className="text-lg font-bold mb-1 text-balance">Attention Is All You Need</h1>
                    <p className="text-xs text-muted-foreground">Vaswani et al. • Google Brain • 2017</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h2 className="text-base font-semibold text-foreground mb-2">Abstract</h2>
                      <div className="text-sm leading-relaxed text-foreground/90 space-y-2">
                        <p>
                          The dominant sequence transduction models are based on complex recurrent or convolutional
                          neural networks that include an encoder and a decoder. The best performing models also connect
                          the encoder and decoder through an{" "}
                          <span
                            className={`${
                              selectedText === "attention mechanism" ? "bg-primary/20 text-primary px-1 rounded" : ""
                            } transition-all duration-300`}
                          >
                            attention mechanism
                          </span>
                          .
                        </p>
                        <p>
                          We propose a new simple network architecture, the Transformer, based solely on attention
                          mechanisms, dispensing with recurrence and convolutions entirely.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Explanation Overlay */}
                {(selectedText || isExplaining || explanation || typingText) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-3xl p-4 shadow-2xl animate-in slide-in-from-bottom duration-300">
                    <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-4"></div>

                    <div className="space-y-4">
                      {selectedText && (
                        <div>
                          <h3 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Selected Text
                          </h3>
                          <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                            <p className="text-xs text-primary font-medium">"{selectedText}"</p>
                          </div>
                        </div>
                      )}

                      {isExplaining && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              <div
                                className="w-2 h-2 bg-accent rounded-full animate-bounce"
                                style={{ animationDelay: "0ms" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-accent rounded-full animate-bounce"
                                style={{ animationDelay: "150ms" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-accent rounded-full animate-bounce"
                                style={{ animationDelay: "300ms" }}
                              ></div>
                            </div>
                            <span className="text-sm text-accent font-medium">AI is analyzing...</span>
                          </div>
                        </div>
                      )}

                      {(typingText || explanation) && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Lightbulb className="w-4 h-4 text-accent" />
                            <h3 className="text-sm font-medium text-accent">Simple Explanation</h3>
                          </div>
                          <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                            <p className="text-sm leading-relaxed text-foreground">
                              {typingText || explanation}
                              {typingText && typingText !== explanation && <span className="animate-pulse">|</span>}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Demo Description - Hidden on mobile */}
            <div className="absolute -right-80 top-0 w-72 space-y-4 hidden lg:block">
              <Card className="p-4 border-border bg-card">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Brain className="w-4 h-4 text-primary" />
                  Current Step
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{currentStepData?.description}</p>
              </Card>

              <Card className="p-4 border-border bg-card">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  Demo Features
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Automatic text selection</li>
                  <li>• Real-time AI processing</li>
                  <li>• Mobile-optimized interface</li>
                  <li>• Instant explanations</li>
                </ul>
              </Card>

              <Button onClick={resetDemo} variant="outline" className="w-full bg-transparent">
                Restart Demo
              </Button>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden mt-6 flex justify-center">
              <Button onClick={resetDemo} variant="outline" size="sm">
                Restart Demo
              </Button>
            </div>
          </div>
        </main>
      )}
      
      <Footer />
    </div>
  );
};

export default AIExplainer;