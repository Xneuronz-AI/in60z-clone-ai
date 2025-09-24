import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, BookOpen, Lightbulb, ChevronLeft, Share, Bookmark, MoreVertical, Wifi, Battery, Signal, MessageCircle } from 'lucide-react'

const followUpQuestions = {
  "sequence transduction models": [
    {
      question: "Can you give me a real-world example of this?",
      answer:
        "Google Translate is a perfect example. When you type 'Hello' in English, it converts (transduces) this sequence into 'Hola' in Spanish. The model reads the English sequence and outputs the Spanish sequence while preserving the meaning.",
    },
    {
      question: "How is this different from regular translation methods?",
      answer:
        "Traditional translation might use word-by-word dictionaries, but sequence transduction models understand context. They know that 'bank' could mean a financial institution or a river bank depending on the surrounding words in the sentence.",
    },
    {
      question: "What other tasks use these models besides translation?",
      answer:
        "Many tasks! Speech recognition (converting audio to text), text summarization (long article to short summary), chatbots like me, and even code generation where programming languages are converted between different formats.",
    },
  ],
  "attention mechanism": [
    {
      question: "Why is attention better than older methods?",
      answer:
        "Older methods processed words one by one, like reading with a narrow flashlight. Attention is like having multiple spotlights that can focus on different important parts simultaneously, making it much faster and more accurate.",
    },
    {
      question: "How does it decide what to focus on?",
      answer:
        "The model learns patterns during training. For example, when translating 'The cat sat on the mat' to French, it learns that 'cat' (le chat) should pay attention to 'The' (le) for proper gender agreement.",
    },
    {
      question: "Is this similar to how humans pay attention?",
      answer:
        "Yes, very similar! Just like when you're reading and your brain automatically focuses on important words while skimming over less important ones, attention mechanisms help AI focus on the most relevant parts of the input.",
    },
  ],
  Transformer: [
    {
      question: "What makes Transformer architecture so special?",
      answer:
        "Transformers can process all words in a sentence simultaneously, unlike older models that had to go word-by-word. It's like the difference between reading an entire page at once versus reading one word at a time.",
    },
    {
      question: "Is this what powers ChatGPT and other AI models?",
      answer:
        "Exactly! ChatGPT, GPT-4, and most modern AI language models are based on the Transformer architecture introduced in this paper. This paper literally revolutionized AI and made today's conversational AI possible.",
    },
    {
      question: "How much faster is it compared to older models?",
      answer:
        "Much faster! Because it processes words in parallel rather than sequentially, training time can be reduced from weeks to days, and inference (getting answers) is nearly instantaneous for most tasks.",
    },
  ],
  "recurrent or convolutional neural networks": [
    {
      question: "Why were these older methods slower?",
      answer:
        "Recurrent networks had to process words one at a time in order - they couldn't start processing word 5 until they finished words 1-4. It's like having to read a book page by page instead of being able to skim the whole chapter.",
    },
    {
      question: "Are these methods completely obsolete now?",
      answer:
        "Not completely! They're still useful for certain tasks, especially when you have limited computational resources. But for most language tasks, Transformers have become the gold standard due to their efficiency.",
    },
    {
      question: "What's the main difference in how they work?",
      answer:
        "Think of recurrent networks like a conveyor belt - information flows in one direction, step by step. Convolutional networks are like looking through a sliding window. Transformers are like having a bird's eye view of everything at once.",
    },
  ],
}

export default function AIExplainer() {
  const [selectedText, setSelectedText] = useState("")
  const [explanation, setExplanation] = useState("")
  const [isExplaining, setIsExplaining] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [typingText, setTypingText] = useState("")
  const [showFollowUp, setShowFollowUp] = useState(false)
  const [followUpQuestion, setFollowUpQuestion] = useState("")
  const [followUpAnswer, setFollowUpAnswer] = useState("")
  const [isGeneratingQuestion, setIsGeneratingQuestion] = useState(false)
  const [isAnswering, setIsAnswering] = useState(false)
  const [typingQuestion, setTypingQuestion] = useState("")
  const [typingAnswer, setTypingAnswer] = useState("")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleTextSelection = (text: string, explanationText: string) => {
    setSelectedText(text)
    setShowExplanation(true)
    setIsExplaining(true)
    setShowFollowUp(false)
    setFollowUpQuestion("")
    setFollowUpAnswer("")
    setCurrentQuestionIndex(0)

    // Simulate AI processing delay
    setTimeout(() => {
      setIsExplaining(false)
      typeExplanation(explanationText)
    }, 1500)
  }

  const typeExplanation = (text: string) => {
    setTypingText("")
    let index = 0
    const interval = setInterval(() => {
      setTypingText(text.slice(0, index))
      index++
      if (index > text.length) {
        clearInterval(interval)
        setExplanation(text)
        setTimeout(() => generateFollowUpQuestion(), 1000)
      }
    }, 30)
  }

  const generateFollowUpQuestion = () => {
    const questions = followUpQuestions[selectedText as keyof typeof followUpQuestions]
    if (!questions || currentQuestionIndex >= questions.length) return

    setIsGeneratingQuestion(true)
    setShowFollowUp(true)

    // Simulate AI thinking time for question generation
    setTimeout(() => {
      setIsGeneratingQuestion(false)
      const currentQ = questions[currentQuestionIndex]
      typeQuestion(currentQ.question, currentQ.answer)
    }, 1200)
  }

  const typeQuestion = (question: string, answer: string) => {
    setTypingQuestion("")
    let index = 0
    const interval = setInterval(() => {
      setTypingQuestion(question.slice(0, index))
      index++
      if (index > question.length) {
        clearInterval(interval)
        setFollowUpQuestion(question)
        setTimeout(() => answerFollowUpQuestion(answer), 800)
      }
    }, 40)
  }

  const answerFollowUpQuestion = (answer: string) => {
    setIsAnswering(true)
    setTypingAnswer("")

    setTimeout(() => {
      setIsAnswering(false)
      typeAnswer(answer)
    }, 1000)
  }

  const typeAnswer = (text: string) => {
    setTypingAnswer("")
    let index = 0
    const interval = setInterval(() => {
      setTypingAnswer(text.slice(0, index))
      index++
      if (index > text.length) {
        clearInterval(interval)
        setFollowUpAnswer(text)
      }
    }, 25)
  }

  const askAnotherQuestion = () => {
    const questions = followUpQuestions[selectedText as keyof typeof followUpQuestions]
    if (!questions) return

    const nextIndex = (currentQuestionIndex + 1) % questions.length
    setCurrentQuestionIndex(nextIndex)
    setFollowUpQuestion("")
    setFollowUpAnswer("")
    setTypingQuestion("")
    setTypingAnswer("")

    generateFollowUpQuestion()
  }

  const closeExplanation = () => {
    setShowExplanation(false)
    setSelectedText("")
    setExplanation("")
    setTypingText("")
    setIsExplaining(false)
    setShowFollowUp(false)
    setFollowUpQuestion("")
    setFollowUpAnswer("")
    setIsGeneratingQuestion(false)
    setIsAnswering(false)
    setTypingQuestion("")
    setTypingAnswer("")
    setCurrentQuestionIndex(0)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
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

            <div className="flex items-center justify-between px-4 py-3 bg-card border-b border-border">
              <div className="flex items-center gap-3">
                <ChevronLeft className="w-6 h-6 text-muted-foreground" />
                <span className="font-semibold text-sm">Research Paper</span>
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
                      The dominant{" "}
                      <span
                        className="cursor-pointer bg-primary/20 text-primary px-1 py-0.5 rounded border-b-2 border-primary/40 hover:bg-primary/30 transition-all duration-200 font-medium"
                        onClick={() =>
                          handleTextSelection(
                            "sequence transduction models",
                            "Think of these as AI systems that convert one sequence (like English text) into another sequence (like French text). It's like having a translator that reads sentence by sentence.",
                          )
                        }
                      >
                        sequence transduction models
                      </span>{" "}
                      are based on complex{" "}
                      <span
                        className="cursor-pointer bg-primary/20 text-primary px-1 py-0.5 rounded border-b-2 border-primary/40 hover:bg-primary/30 transition-all duration-200 font-medium"
                        onClick={() =>
                          handleTextSelection(
                            "recurrent or convolutional neural networks",
                            "These are older AI architectures. Recurrent networks process text word-by-word in order (like reading), while convolutional networks look at chunks of text at once (like scanning).",
                          )
                        }
                      >
                        recurrent or convolutional neural networks
                      </span>{" "}
                      that include an encoder and a decoder. The best performing models also connect the encoder and
                      decoder through an{" "}
                      <span
                        className={`cursor-pointer px-1 py-0.5 rounded border-b-2 transition-all duration-200 font-medium ${
                          selectedText === "attention mechanism"
                            ? "bg-primary/40 text-primary border-primary"
                            : "bg-primary/20 text-primary border-primary/40 hover:bg-primary/30"
                        }`}
                        onClick={() =>
                          handleTextSelection(
                            "attention mechanism",
                            "This is like having a spotlight that helps the AI focus on the most important parts of the input when making decisions. It's similar to how you might highlight key phrases when studying.",
                          )
                        }
                      >
                        attention mechanism
                      </span>
                      .
                    </p>
                    <p>
                      We propose a new simple network architecture, the{" "}
                      <span
                        className="cursor-pointer bg-primary/20 text-primary px-1 py-0.5 rounded border-b-2 border-primary/40 hover:bg-primary/30 transition-all duration-200 font-medium"
                        onClick={() =>
                          handleTextSelection(
                            "Transformer",
                            "The new AI architecture introduced in this paper. Think of it as a more efficient way to process language that can look at all words simultaneously instead of one at a time.",
                          )
                        }
                      >
                        Transformer
                      </span>
                      , based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-base font-semibold text-foreground mb-2">1. Introduction</h2>
                  <div className="text-sm leading-relaxed text-foreground/90 space-y-2">
                    <p>
                      Recurrent neural networks, long short-term memory and gated recurrent neural networks in
                      particular, have been firmly established as state of the art approaches in sequence modeling and
                      transduction problems such as language modeling and machine translation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Explanation Overlay */}
            {showExplanation && (
              <div className="absolute bottom-0 left-0 right-0 bg-card border-t border-border rounded-t-3xl p-4 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[70%] overflow-y-auto">
                <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-4"></div>

                <div className="space-y-4">
                  {selectedText && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-foreground flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary" />
                          Selected Text
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={closeExplanation}
                          className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
                        >
                          ×
                        </Button>
                      </div>
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

                  {showFollowUp && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-blue-500" />
                        <h3 className="text-sm font-medium text-blue-500">Follow-up Question</h3>
                      </div>

                      {isGeneratingQuestion && (
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div
                              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                          <span className="text-sm text-blue-500 font-medium">Generating question...</span>
                        </div>
                      )}

                      {(typingQuestion || followUpQuestion) && (
                        <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            Q: {typingQuestion || followUpQuestion}
                            {typingQuestion && typingQuestion !== followUpQuestion && (
                              <span className="animate-pulse text-blue-500">|</span>
                            )}
                          </p>
                        </div>
                      )}

                      {isAnswering && followUpQuestion && (
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div
                              className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                          <span className="text-sm text-green-500 font-medium">Thinking...</span>
                        </div>
                      )}

                      {(typingAnswer || followUpAnswer) && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="w-4 h-4 text-green-500" />
                            <h3 className="text-sm font-medium text-green-500">Answer</h3>
                          </div>
                          <div className="p-3 bg-green-500/5 rounded-lg border border-green-500/20">
                            <p className="text-sm leading-relaxed text-foreground">
                              {typingAnswer || followUpAnswer}
                              {typingAnswer && typingAnswer !== followUpAnswer && (
                                <span className="animate-pulse text-green-500">|</span>
                              )}
                            </p>
                          </div>
                        </div>
                      )}

                      {followUpAnswer && !isAnswering && !isGeneratingQuestion && (
                        <div className="pt-2 border-t border-border/50">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={askAnotherQuestion}
                            className="text-xs h-7 w-full bg-transparent"
                          >
                            Ask Another Question
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {!showExplanation && (
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-border">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-primary">Interactive Demo</span>
                </div>
                <p className="text-xs text-muted-foreground">Tap on highlighted terms to get AI explanations</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}