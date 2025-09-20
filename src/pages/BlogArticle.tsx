import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import informationOverloadImage from '@/assets/information-overload.jpg';
import connectingDotsImage from '@/assets/connecting-dots.jpg';
import amazonAiConclaveImage from '@/assets/amazon-ai-conclave-2023.jpg';

const BlogArticle = () => {
  const { id } = useParams();

  if (id !== 'tired-of-information-overload' && id !== 'future-of-event-discovery') {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Article not found</h1>
            <Link to="/blog" className="text-primary hover:underline">
              Return to blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Link */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {id === 'tired-of-information-overload' 
                  ? "Tired of the Information Overload? You're Not Alone."
                  : "The Future of Event Discovery Isn't About Finding More; It's About Finding the Right Ones."
                }
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{id === 'tired-of-information-overload' ? 'September 15, 2025' : 'September 20, 2025'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{id === 'tired-of-information-overload' ? '5 min read' : '4 min read'}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={id === 'tired-of-information-overload' ? informationOverloadImage : amazonAiConclaveImage}
                  alt={id === 'tired-of-information-overload' 
                    ? "Person overwhelmed by information overload with multiple screens and displays"
                    : "Amazon AI Conclave event with large audience"
                  }
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <article className="prose prose-lg max-w-none dark:prose-invert">
              {id === 'tired-of-information-overload' ? (
                <>
                  <p className="text-lg leading-relaxed mb-6">
                    In today's fast-paced world, staying informed feels like a full-time job. You grab your phone for a quick update, and an hour later, you're lost in a sea of long articles, clickbait headlines, and endless notifications. The digital world promises to connect us to everything, but often leaves us feeling overwhelmed and out of sync.
                  </p>

                  <p className="mb-4">You've probably said things like:</p>

                  <ul className="mb-6">
                    <li>I wish I could stay on top of the news without spending hours scrolling.</li>
                    <li>Someday I hope to understand the latest scientific breakthroughs without needing a Ph.D.</li>
                    <li>Now you can get the gist of a story in the time it takes to brew a cup of coffee.</li>
                  </ul>

                  <p className="mb-6">
                    This isn't a problem with your attention span; it's a problem with how information is delivered. The world is moving faster, but the way we consume news hasn't kept up. We're bombarded with information, yet we feel less informed. We see headlines about groundbreaking research, but we don't have the time or energy to decipher the jargon. We want to be part of the conversation, but we feel like we're always playing catch-up.
                  </p>

                  <p className="mb-6">
                    What you really want is to be informed, not overwhelmed. You want the essential facts, the core ideas, the "aha!" moments, without the noise. You want to feel smart and knowledgeable in your daily conversations, whether you're discussing a new medical discovery or a major tech trend. You want to stay current without sacrificing your limited time.
                  </p>

                  <p className="mb-4">
                    You've got a dozen different tabs open, a handful of apps on your phone, and a pile of unread newsletters. To keep up with everything you care about—from Research Papers to Webinars and the latest News in science—you're forced to jump from one platform to another. You find yourself thinking:
                  </p>

                  <ul className="mb-6">
                    <li>I wish I could find all the information I need in one place.</li>
                    <li>Someday I hope to truly understand a complex research paper without a week of reading.</li>
                    <li>Now you can get the core insights from a research paper, listen to a deep-dive podcast about it, and find the next relevant event—all in the same app.</li>
                  </ul>

                  <p className="mb-8">
                    Your problem isn't a lack of information; it's a lack of connection. Your curiosity is a superpower, but it's being wasted on a fragmented and inefficient information ecosystem.
                  </p>

                  <h2 className="text-3xl font-bold mb-6">The Researcher's Pain Point: Lost in a Sea of Papers</h2>

                  <p className="mb-6">
                    You're a professional, a student, or a hobbyist who needs to stay on the cutting edge. You know that the real breakthroughs are in academic journals. But let's be honest: who has the time to read through a dense, 50-page paper filled with jargon, statistical data, and footnotes? The pain is real: you find a promising title, but once you open the PDF, you're lost. You want to understand the core findings and the Related Papers that led to this work, but you're stuck in a digital rabbit hole.
                  </p>

                  <p className="mb-8">
                    You're not looking for a library. You're looking for a librarian—someone who can hand you the key insights, the main contributions, and point you to the next logical step.
                  </p>

                  <h2 className="text-3xl font-bold mb-6">The Event-Goer's Dilemma: Finding a Needle in a Haystack</h2>

                  <p className="mb-6">
                    You want to attend a Webinar to learn about the latest trends. You want to participate in a Hackathon to build something new. You want to be at that key Event where the biggest names in your industry are speaking. But how do you find them? How do you know if an event is worth your limited time and money?
                  </p>

                  <p className="mb-8">
                    You don't want to miss a major opportunity. You need a curated, concise feed of only the most relevant events. You need a service that understands you and filters out the noise, telling you exactly what you need to know about an event in 60 words or less.
                  </p>

                  <h2 className="text-3xl font-bold mb-6">The Daily Knowledge Seeker: Drowning in Headlines</h2>

                  <p className="mb-6">
                    You care about the world and what's next. You follow Science, Medical, Innovation, and Technology. But every day, your news feed is a firehose of headlines, many of which are just variations of the same story. You're exhausted from trying to keep up.
                  </p>

                  <p className="mb-8">
                    You don't just want to know what happened; you want to know why it matters. You need a trusted source that distills the essence of a story, giving you the critical information without the filler.
                  </p>

                  <h2 className="text-3xl font-bold mb-6">Connecting the Dots: The Modern Way to Learn</h2>

                  {/* Second Image */}
                  <div className="mb-8 rounded-lg overflow-hidden">
                    <img 
                      src={connectingDotsImage} 
                      alt="Abstract visualization of connected dots and data flow representing knowledge connections" 
                      className="w-full h-64 md:h-96 object-cover"
                    />
                  </div>

                  <p className="mb-6">
                    Imagine a different reality. One platform where a single tap can take you from a 60-word summary of a research paper to an in-depth, 15-minute Research Podcast that unpacks the methodology and implications.
                  </p>

                  <p className="mb-6">
                    Imagine that same platform showing you related papers and key figures in the field, helping you connect the dots backwards and forwards. And then, it shows you upcoming Webinars and Events related to that exact topic.
                  </p>

                  <p className="mb-8 text-lg font-medium">
                    This is what a truly customer-centric approach to information looks like. It's not about giving you more content; it's about giving you a smarter way to consume it. It's about empowering you to be the informed, connected person you want to be, without sacrificing your time or peace of mind. This is what In60z was built for. It's about turning your curiosity into true knowledge.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg leading-relaxed mb-6">
                    You want to stay ahead in your field. You know that the real breakthroughs happen at conferences, the hands-on learning happens in workshops, and the cutting-edge insights are shared in webinars. But the current way of finding these events is a frustrating and inefficient mess.
                  </p>

                  <p className="mb-6">
                    You're constantly sifting through generic calendars and outdated listings, trying to figure out which events are worth your time and money. You miss a key talk because you only found out about it after the fact. You want to connect with innovators but you don't even know where they're gathering. This is a problem we understand. Your goal isn't to attend every event; it's to attend the right events. Your problem is not a lack of events, but a lack of a single, trusted source to filter them for you.
                  </p>

                  <h2 className="text-3xl font-bold mb-6">From Discovery to Direction</h2>

                  <p className="mb-6">
                    The current event landscape is a fragmented mess. You have to check multiple websites, from LinkedIn and Eventbrite to university and company sites, just to find relevant events. This is a massive time sink. It leads to the Fear of Missing Out (FOMO), where you discover a life-changing hackathon or a key talk after the deadline has passed. This is a problem we understand, and it's why we've built a better way.
                  </p>

                  <p className="mb-4">You've probably said to yourself:</p>

                  <ul className="mb-6">
                    <li>I wish I could find all the key industry events in one place, with all the details I need.</li>
                    <li>Someday I hope to get a clear, concise summary of an event before I commit my time to it.</li>
                    <li>Now you can discover the most relevant webinars, hackathons, and conferences with just a few swipes.</li>
                  </ul>

                  <h2 className="text-3xl font-bold mb-6">The In60z Solution: Curated, Not Cluttered</h2>

                  <p className="mb-6">
                    With In60z, you get a full summary right in your feed. We don't just list events; we give you the information you need to make an informed decision instantly. Our summaries are designed to be read in under 60 words, so you can decide if an event is worth your time before you even click a link.
                  </p>

                  <ul className="mb-6">
                    <li><strong>Conferences:</strong> We don't just list them. We summarize the key topics and speakers so you can decide if a talk is worth your time.</li>
                    <li><strong>Webinars:</strong> We highlight the core takeaways and the presenter's expertise, helping you choose the best sessions that align with your specific interests.</li>
                    <li><strong>Hackathons & Events:</strong> We provide direct links and a quick overview of the goals, so you can find a team or project that excites you without any fuss.</li>
                  </ul>

                  <h2 className="text-3xl font-bold mb-6">Your Professional Life, Connected</h2>

                  <p className="mb-6">
                    Take a look at a session like "From MVP to Enterprise: Building Scalable Solutions." With In60z, you get a full summary in your feed. We tell you exactly what the session covers, who is speaking, and when and where it's happening. We even show you the social proof of how many people are attending ("+5k people are Attending"), giving you immediate insight into the event's popularity and value.
                  </p>

                  <p className="mb-6">
                    This isn't just about finding conferences or webinars. It's about transforming your approach to professional development. We give you a single, elegant feed that cuts through the noise and provides you with the essential information on events across Science, Medical, Innovation, and Technology.
                  </p>

                  <p className="mb-8">
                    Whether you're looking for a cutting-edge hackathon to test your skills or a niche webinar on a specific medical innovation, In60z provides the clarity and context you need. You're no longer hunting for events; you're being directed to the ones that matter most. Your time is valuable, and In60z is built to honor that.
                  </p>
                </>
              )}
            </article>

            {/* Call to Action */}
            <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Information Consumption?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of professionals who've already discovered a smarter way to stay informed.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
              >
                Get Started with In60z
              </Link>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle;