import { useCallback, useState } from 'react'
import { Card } from '../types'

export default function useSwiperData(cards: Card[]) {
  const [cardIdx, setCardIdx] = useState(0)
  const [sectionIdx, setSectionIdx] = useState(0)
  const [showMore, setShowMore] = useState(false)

  const handlePressInfo = () => {
    setShowMore(!showMore)
  }

  const handlePressLeft = useCallback(() => {
    if (sectionIdx !== 0) setSectionIdx(sectionIdx - 1)
  }, [sectionIdx])

  const handlePressRight = useCallback(() => {
    if (sectionIdx !== cards[cardIdx].sections.length - 1)
      setSectionIdx(sectionIdx + 1)
  }, [cards, sectionIdx, cardIdx])

  const handleSetCardIdx = useCallback(
    (value: React.SetStateAction<number>) => {
      setCardIdx(value)
      setSectionIdx(0)
    },
    []
  )

  return {
    cardIdx,
    setCardIdx: handleSetCardIdx,
    sectionIdx,
    showMore,
    setShowMore,
    handlePressLeft,
    handlePressRight,
    setSectionIdx,
    handlePressInfo,
  }
}
