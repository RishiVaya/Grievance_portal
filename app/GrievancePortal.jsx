import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Sparkles } from "lucide-react";

export default function GrievancePortal() {
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
    const newGrievance = { ...form, id: Date.now(), name: "Kulfi" };
    setForm({ category: "general", description: "", status: "Submitted" });

    alert("Your note was received with a virtual hug 💫");

    await fetch("https://formspree.io/f/xrbklrpy", {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 p-8 flex flex-col justify-center items-center text-center animate-fade-in">
      <div className="flex flex-col items-center mb-6 space-y-2">
        <div className="bg-white p-4 rounded-full shadow-lg animate-bounce">
          <Sparkles className="text-purple-400 h-10 w-10" />
        </div>
        <h1 className="text-5xl font-extrabold text-purple-700 drop-shadow-sm">Grievance Portal 💌</h1>
        <p className="text-purple-600 text-lg">Hey Kulfi, share your thoughts with Puchkoo 🌷</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6 bg-white p-8 rounded-3xl shadow-2xl border border-purple-300">
        <div className="text-left">
          <label className="text-sm font-medium text-purple-700">Choose a category 💡</label>
          <Select
            value={form.category}
            onValueChange={(value) => handleChange("category", value)}
          >
            <SelectTrigger className="bg-purple-50 mt-1">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General 📝</SelectItem>
              <SelectItem value="home">Home 🏠</SelectItem>
              <SelectItem value="staff">Me 😅</SelectItem>
              <SelectItem value="food">Food 🍱</SelectItem>
              <SelectItem value="work">Work 💼</SelectItem>
              <SelectItem value="travel">Travel ✈️</SelectItem>
              <SelectItem value="other">Other 🌈</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="text-left">
          <label className="text-sm font-medium text-purple-700">Your Message 🗨️</label>
          <Textarea
            placeholder="Type away, I'm listening 💬"
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="bg-purple-50 mt-1"
            rows={5}
            required
          />
        </div>

        <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-full">
          Submit to Puchkoo 🌸
        </Button>
      </form>
    </div>
  );
}
