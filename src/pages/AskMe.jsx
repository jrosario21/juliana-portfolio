import { useState, useRef, useEffect } from 'react'
import './AskMe.css'

const SUGGESTED = [
  'What has Juliana built?',
  'How does she use AI in her work?',
  "What's her background in fashion?",
  'What kind of roles is she looking for?',
  'How does she work with developers?',
]

export default function AskMe() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi — I'm an AI trained on Juliana's background, work, and thinking. Ask me anything about her experience, projects, or approach.",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function send(text) {
    if (!text.trim() || loading) return
    const userMsg = { role: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map(m => ({
            role: m.role,
            content: m.text,
          })),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        const errDetail = data.error || data.details || `HTTP ${res.status}`
        setMessages(prev => [...prev, {
          role: 'assistant',
          text: `Something went wrong on my end (${errDetail}). Please try again or reach Juliana directly at julianamrosario@gmail.com.`
        }])
        return
      }

      if (!data.reply) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          text: "I didn't get a response. Please try again in a moment."
        }])
        return
      }

      setMessages(prev => [...prev, { role: 'assistant', text: data.reply }])
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: "Couldn't reach the server — check your connection and try again."
      }])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send(input)
    }
  }

  return (
    <div className="askme-layout">

      {/* LEFT PANEL */}
      <div className="askme-left">
        <div className="askme-left-inner">
          <p className="askme-eyebrow">AI Mode · Powered by Claude</p>
          <h1 className="askme-title">
            Ask me anything<br />about <em>Juliana.</em>
          </h1>
          <p className="askme-sub">
            I'm trained on her background, projects, and thinking. Ask about her work, her process, or what she's looking for next.
          </p>

          <div className="suggested-wrap">
            <p className="suggested-label">Try asking —</p>
            <div className="suggested-chips">
              {SUGGESTED.map(q => (
                <button key={q} className="chip" onClick={() => send(q)}>{q}</button>
              ))}
            </div>
          </div>

          <p className="askme-disclaimer">Powered by Claude · Responses based on Juliana's actual background.</p>
        </div>
      </div>

      {/* RIGHT PANEL — CHAT */}
      <div className="askme-right">
        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`message message-${m.role}`}>
              {m.role === 'assistant' && (
                <div className="message-avatar">J</div>
              )}
              <div className="message-bubble">{m.text}</div>
            </div>
          ))}
          {loading && (
            <div className="message message-assistant">
              <div className="message-avatar">J</div>
              <div className="message-bubble typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-area">
          <div className="chat-input-wrap">
            <textarea
              className="chat-input"
              placeholder="Ask something about Juliana..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              rows={1}
            />
            <button
              className="chat-send"
              onClick={() => send(input)}
              disabled={!input.trim() || loading}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </div>
          <p className="input-hint">Press Enter to send · Shift+Enter for new line</p>
        </div>
      </div>

    </div>
  )
}
