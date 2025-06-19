import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TailwindTest from "./tailwind-test";

export default function TestPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Style Test</h1>
      
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">If you can see this card with proper styling, shadcn/ui is working!</p>
          <Button className="bg-blue-600 hover:bg-blue-700">Test Button</Button>
        </CardContent>
      </Card>

      <div className="bg-red-500 text-white p-4 rounded mb-8">
        If this has red background, Tailwind is working!
      </div>
      
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-4">Tailwind Test Component</h2>
        <TailwindTest />
      </div>
    </div>
  );
}