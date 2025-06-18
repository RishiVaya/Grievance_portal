import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { toast } from "sonner";

export default function GrievancePortal() {
  const [grievances, setGrievances] = useState([]);
  const [form, setForm] = useState({
    category: "general",
    description: "",
    status: "Submitted"
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newGrievance = { ...form, id: Date.now(), name: "Hena" };
    setGrievances([...grievances, newGrievance]);
    setForm({ category: "general", description: "", status: "Submitted" });

    toast.success("Grievance submitted! ❤️");

    // Send grievance to email using EmailJS or any backend integration
    await fetch("https://formspree.io/f/mqkrwqze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newGrievance.name,
        category: newGrievance.category,
        message: newGrievance.description,
        _replyto: "rvayaq@gmail.com"
      })
    });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6 text-pink-600">Grievance Box 💌</h1>
      <p className="text-gray-600 mb-8">Hey Hena 💖, let me know what's on your mind. I'm always listening. 😊</p>

      <form onSubmit={handleSubmit} className="space-y-4 bg-pink-50 p-6 rounded-3xl shadow-xl">
        <Select
          value={form.category}
          onValueChange={(value) => handleChange("category", value)}
        >
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General 📝</SelectItem>
            <SelectItem value="facility">Apartment 🏠</SelectItem>
            <SelectItem value="staff">Me 😅</SelectItem>
            <SelectItem value="other">Other 🌈</SelectItem>
          </SelectContent>
        </Select>

        <Textarea
          placeholder="Tell me everything ❤️"
          value={form.description}
          onChange={(e) => handleChange("description", e.target.value)}
          className="bg-white"
          required
        />

        <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold">
          Submit to Puchkoo 💖
        </Button>
      </form>

      <h2 className="text-2xl font-semibold mt-12 mb-4 text-pink-700">Your Past Grievances 📜</h2>
      <div className="grid gap-4">
        {grievances.map((g) => (
          <Card key={g.id} className="bg-white border-l-4 border-pink-400">
            <CardContent className="p-4 text-left">
              <div className="text-xs text-gray-500 mb-1">{g.category.toUpperCase()}</div>
              <h3 className="text-md font-semibold">From: Hena</h3>
              <p className="mt-1 text-sm text-gray-800">{g.description}</p>
              <div className="text-right text-xs text-pink-600 mt-2">Status: {g.status}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
