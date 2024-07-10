const useBreakpoint = () => {
  const width = window.innerWidth

  const isMobile = width <= 767

  return {
    isMobile,
  }
}

export default useBreakpoint
