import BoardView from "@components/board/BoardView";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <h1 className="text-xl font-medium">My board</h1>
      </div>
      <BoardView />
    </main>
  );
}
