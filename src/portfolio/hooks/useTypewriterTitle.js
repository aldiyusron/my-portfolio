import { useEffect, useRef, useState } from 'react'

const INITIAL_DELAY = 120
const TYPING_DELAY = 85
const DELETING_DELAY = 45
const HOLD_DELAY = 2200
const CURSOR_BLINK_DELAY = 530

export function useTypewriterTitle(strings) {
  const [displayText, setDisplayText] = useState('')
  const [cursorOn, setCursorOn] = useState(true)
  const [stringIndex, setStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = strings[stringIndex]

    const tick = () => {
      setDisplayText((previousText) => {
        if (!isDeleting) {
          if (previousText.length < current.length) {
            timeoutRef.current = window.setTimeout(tick, TYPING_DELAY)
            return current.slice(0, previousText.length + 1)
          }

          timeoutRef.current = window.setTimeout(() => setIsDeleting(true), HOLD_DELAY)
          return previousText
        }

        if (previousText.length > 0) {
          timeoutRef.current = window.setTimeout(tick, DELETING_DELAY)
          return current.slice(0, previousText.length - 1)
        }

        setIsDeleting(false)
        setStringIndex((value) => (value + 1) % strings.length)
        return previousText
      })
    }

    timeoutRef.current = window.setTimeout(tick, INITIAL_DELAY)

    return () => {
      window.clearTimeout(timeoutRef.current)
    }
  }, [isDeleting, stringIndex, strings])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCursorOn((value) => !value)
    }, CURSOR_BLINK_DELAY)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  return { cursorOn, displayText }
}
