

export const chooseColor = (title: string) => {
  const colors = {  
  Fr: "bg-[#4F8EF7]",
  C: "bg-[#E74C3C]",
  S: "bg-[#cf301e]",
  J: "bg-[#6C5CE7]",
  K: "bg-[#4A6CF7]",
  W: "bg-[#2D9CDB]",
  De: "bg-[#FF4FA3]",
  S: "bg-[#9B6BFF]",
  N: "bg-[#27AE60]",
  F: "bg-[#2D3748]",
  U: "bg-[#4F7DFF]",
  Ba: "bg-[#F39C12]",
  Ge: "bg-[#6C63FF]",
  AI: "bg-[#8B5CF6]",
  W: "bg-[#14B8A6]",
  M: "bg-[#06B6D4]",
  V: "bg-[#84CC16]",
  T: "bg-[#F97316]",
  H: "bg-[#EC4899]"
} 


return colors[title  as keyof typeof colors]
  
}
