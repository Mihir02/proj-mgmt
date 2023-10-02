import Board from "@/components/Board";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <header>
      {/* Header */}
      <Header />
    </header>
    
    <main className="flex-1">
      <Board />
    </main>
    
    <footer className="bg-gray-800 text-white p-4 text-center">
      Imagine_Space Ai, brought to you by &copy; Mihir U
    </footer>
  </div>
  )
}
