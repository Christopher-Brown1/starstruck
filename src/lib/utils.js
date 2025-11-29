export const generateRoomCode = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const digits = "0123456789"

  let code = ""

  // Generate 3 random letters
  for (let i = 0; i < 3; i++) {
    code += letters.charAt(Math.floor(Math.random() * letters.length))
  }

  // Generate 3 random digits
  for (let i = 0; i < 3; i++) {
    code += digits.charAt(Math.floor(Math.random() * digits.length))
  }

  return code
}
