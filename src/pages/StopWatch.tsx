import React, { useState } from 'react'
import { Button, Center, Box, Text, VStack, HStack } from '@chakra-ui/react'

const StopWatch = () => {
  const [time, setTime] = useState<number>(0)
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)
  const [laps, setLaps] = useState<number[]>([])

  const handleStart = () => {
    if (timerId) return
    const id: NodeJS.Timeout = setInterval(() => setTime((prevTime) => prevTime + 10), 10)
    setTimerId(id)
  }

  const handleStop = () => {
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  const handleReset = () => {
    setTime(0)
    setLaps([])
    if (timerId) clearInterval(timerId)
    setTimerId(null)
  }

  const handleLap = () => {
    setLaps((prevLaps) => [...prevLaps, time])
  }

  const formatTime = (ms: number) => {
    const padTime = (time: number, length: number) =>
      time.toString().padStart(length, '0');
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000 / 10);

    return `${padTime(minutes, 2)}:${padTime(seconds, 2)}.${padTime(
      milliseconds,
      2
    )}`;
  };

  return (
    <Box maxW="md" mx="auto" textAlign="center">
      <Text fontSize="6xl" fontWeight="bold" mb={8}>{formatTime(time)}</Text>
      <HStack justify="center" mb={8}>
        <Button onClick={handleStart} size="lg" colorScheme="teal">Start</Button>
        <Button onClick={handleStop} size="lg" colorScheme="red">Stop</Button>
        {timerId ? (
          <Button onClick={handleLap} size="lg" colorScheme="yellow">Lap</Button>
        ) : (
          <Button onClick={handleReset} size="lg" colorScheme="gray">Reset</Button>
        )}
      </HStack>
      <VStack spacing={4}>
        {laps.map((lap, index) => (
          <Box key={index} fontWeight="bold" fontSize="xl">{`Lap ${index + 1}: ${formatTime(lap)}`}</Box>
        ))}
      </VStack>
    </Box>
  )
}

export default StopWatch
