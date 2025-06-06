
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Frontend only for now
  };
  
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2600&auto=format')",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="bg-[#221F26] p-8 rounded-lg shadow-xl w-full max-w-md border border-[#403E43]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#9b87f5]">Enter Your Common Room</h1>
          <p className="text-gray-400 mt-2">Welcome back, wizard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Owl Post (Email)</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="harry@hogwarts.edu"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-[#1A1F2C] border-[#403E43] text-white"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Secret Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-[#1A1F2C] border-[#403E43] text-white pr-10"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
            Login
          </Button>
        </form>
        
        <div className="mt-6 text-center text-gray-400">
          <p>
            Not part of the order yet?{" "}
            <Link to="/signup" className="text-[#9b87f5] hover:underline">
              Join the order
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
