import React, { useState } from 'react';
import { AIExplanationPanel } from './AIExplanationPanel';

export const PaperContent = () => {
  const [selectedText, setSelectedText] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleTextSelection = (e: React.MouseEvent) => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      const text = selection.toString().trim();
      setSelectedText(text);
      
      // Position the button near the selection
      const rect = selection.getRangeAt(0).getBoundingClientRect();
      setButtonPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 50
      });
    }
  };

  const handleExplainClick = () => {
    setShowExplanation(true);
    window.getSelection()?.removeAllRanges();
    setSelectedText('');
  };

  const explanations: { [key: string]: string } = {
    'multi-head attention': 'Think of it as having multiple spotlights that can focus on different parts of a sentence simultaneously, helping the AI understand context better.',
    'transformer architecture': 'A new way to process language that\'s much faster than previous methods, like having multiple translators working in parallel.',
    'self-attention mechanism': 'A way for the AI to decide which words in a sentence are most important when understanding each word, like how you might emphasize certain words when reading.',
    'scaled dot-product attention': 'A mathematical formula that helps the AI calculate how much attention to pay to each word when processing text.',
    'positional encoding': 'A technique to help the AI understand the order of words in a sentence, since transformers process all words at once.',
    'encoder-decoder': 'Two parts of the AI system: one that understands the input text and another that generates the output text.',
    'attention weights': 'Numbers that show how much the AI is focusing on each word when making decisions about the text.'
  };

  const getExplanation = (text: string) => {
    const lowerText = text.toLowerCase();
    for (const [key, explanation] of Object.entries(explanations)) {
      if (lowerText.includes(key)) {
        return explanation;
      }
    }
    return `"${text}" is a technical concept in AI and machine learning. It refers to advanced computational methods used in natural language processing and neural networks.`;
  };

  return (
    <div className="relative h-full">
      {/* Floating Explain Button */}
      {selectedText && (
        <div 
          className="fixed z-50 animate-fade-in"
          style={{ 
            left: `${buttonPosition.x}px`, 
            top: `${buttonPosition.y}px`,
            transform: 'translateX(-50%)'
          }}
        >
          <button
            onClick={handleExplainClick}
            className="bg-[#0075ff] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
          >
            <span className="text-xs">🤖</span>
            <span>Explain with AI</span>
          </button>
        </div>
      )}

      {/* Paper Content */}
      <div 
        className="h-full overflow-y-auto px-6 py-4 text-white scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        onMouseUp={handleTextSelection}
        style={{ WebkitUserSelect: 'text', userSelect: 'text' }}
      >
        <article className="space-y-6">
          {/* Paper Title */}
          <div className="border-b border-gray-800 pb-4">
            <h1 className="text-2xl font-bold mb-3 leading-tight">
              Attention Is All You Need
            </h1>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit</p>
              <p>Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin</p>
              <p className="text-xs text-gray-500 mt-2">Google Brain • Google Research • University of Toronto</p>
            </div>
          </div>

          {/* Abstract */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-[#0075ff]">Abstract</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              The dominant sequence transduction models are based on complex recurrent or convolutional neural networks 
              that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an 
              <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors"> attention mechanism</span>. 
              We propose a new simple network architecture, the <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors">Transformer</span>, 
              based solely on <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors">attention mechanisms</span>, 
              dispensing with recurrence and convolutions entirely.
            </p>
          </section>

          {/* Introduction */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-[#0075ff]">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Recurrent neural networks, long short-term memory and gated recurrent neural networks in particular, 
              have been firmly established as state of the art approaches in sequence modeling and transduction problems. 
              Numerous efforts have since continued to push the boundaries of recurrent language models and 
              <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors"> encoder-decoder</span> architectures.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              Attention mechanisms have become an integral part of compelling sequence modeling and transduction models 
              in various tasks, allowing modeling of dependencies without regard to their distance in the input or output sequences. 
              In all but a few cases, however, such <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors">attention mechanisms</span> 
              are used in conjunction with a recurrent network.
            </p>
          </section>

          {/* Model Architecture */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-[#0075ff]">3. Model Architecture</h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              Most competitive neural sequence transduction models have an <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors">encoder-decoder</span> structure. 
              Here, the encoder maps an input sequence to a sequence of continuous representations. 
              Given the output, the decoder then generates an output sequence one element at a time.
            </p>
            
            <h3 className="text-base font-medium mb-2 text-gray-200">3.1 Encoder and Decoder Stacks</h3>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              The <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors">Transformer architecture</span> follows this overall structure using stacked 
              <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors"> self-attention</span> and point-wise, fully connected layers 
              for both the encoder and decoder.
            </p>

            <h3 className="text-base font-medium mb-2 text-gray-200">3.2 Attention</h3>
            <p className="text-gray-300 leading-relaxed text-sm mb-4">
              An attention function can be described as mapping a query and a set of key-value pairs to an output. 
              We call our particular attention <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors">"Scaled Dot-Product Attention"</span>. 
              The input consists of queries and keys of dimension dk, and values of dimension dv.
            </p>

            <h3 className="text-base font-medium mb-2 text-gray-200">3.2.2 Multi-Head Attention</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Instead of performing a single attention function with dmodel-dimensional keys, values and queries, 
              we found it beneficial to linearly project the queries, keys and values h times with different, 
              learned linear projections. This is called <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors">multi-head attention</span>, 
              which allows the model to jointly attend to information from different representation subspaces.
            </p>
          </section>

          {/* Position Encoding */}
          <section>
            <h2 className="text-lg font-semibold mb-3 text-[#0075ff]">3.5 Positional Encoding</h2>
            <p className="text-gray-300 leading-relaxed text-sm">
              Since our model contains no recurrence and no convolution, in order for the model to make use of the 
              order of the sequence, we must inject some information about the relative or absolute position of the 
              tokens in the sequence. To this end, we add <span className="bg-gray-800 px-1 rounded cursor-pointer hover:bg-gray-700 transition-colors">"positional encodings"</span> 
              to the input embeddings at the bottoms of the encoder and decoder stacks.
            </p>
          </section>
        </article>
      </div>

      {/* AI Explanation Panel */}
      <AIExplanationPanel 
        isOpen={showExplanation}
        onClose={() => setShowExplanation(false)}
        selectedText={selectedText}
        explanation={getExplanation(selectedText)}
      />
    </div>
  );
};