import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from 'pages/Home'
import JSX from 'pages/JSX'
import Chakra from 'pages/Chakra'
import StopwatchExample from 'pages/StopWatchExample'
import StopwatchChakraExample from 'pages/StopWatchChakraExample'
import State from 'pages/State'
import Notfound from 'pages/Notfound'

import StopWatch from 'pages/StopWatch'

export const RouterConfig = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="stopwatch" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/state" element={<State />} />
          <Route path="/chakra" element={<Chakra />} />
          <Route path="/stopwatch/example" element={<StopwatchExample />} />
          <Route path="/stopwatch/chakra/example" element={<StopwatchChakraExample />} />
          <Route path="/stopwatch/" element={<StopWatch />} />
          <Route path="*"element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
