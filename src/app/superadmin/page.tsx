"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import {
  Building,
  KeyRound,
  Mail,
  Shield,
  Eye,
  EyeOff,
  Info,
} from "lucide-react";

export default function SuperAdminLoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [step, setStep] = React.useState<"login" | "2fa">("login");
  const [twoFactorCode, setTwoFactorCode] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // Demo credentials
  const demoCredentials = {
    email: "admin@roam.com",
    password: "admin123",
    twoFactorCode: "123456",
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (
      email === demoCredentials.email &&
      password === demoCredentials.password
    ) {
      setStep("2fa");
      toast({
        title: "2FA Required",
        description: "Please enter the two-factor authentication code.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: "Invalid super admin credentials.",
      });
    }
    setIsLoading(false);
  };

  const handleTwoFactor = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (twoFactorCode === demoCredentials.twoFactorCode) {
      // Set session for superadmin
      localStorage.setItem(
        "superadmin_session",
        JSON.stringify({
          email: email,
          loginTime: new Date().toISOString(),
          role: "superadmin",
        }),
      );

      toast({
        title: "Login Successful",
        description: "Welcome to the Super Admin Dashboard!",
      });
      router.push("/superadmin/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "2FA Failed",
        description: "Invalid two-factor authentication code.",
      });
    }
    setIsLoading(false);
  };

  const handleBack = () => {
    setStep("login");
    setTwoFactorCode("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
            <Building className="h-10 w-10" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Super Admin Portal
          </CardTitle>
          <CardDescription className="text-gray-600">
            {step === "login"
              ? "Secure access to platform management"
              : "Two-factor authentication required"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Demo Credentials Info */}
          <Alert className="bg-blue-50 border-blue-200">
            <Info className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Demo Credentials:</strong>
              <br />
              Email: admin@roam.com
              <br />
              Password: admin123
              <br />
              2FA Code: 123456
            </AlertDescription>
          </Alert>

          {step === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@roam.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 py-3"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 pr-10 py-3"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Authenticating...
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleTwoFactor} className="space-y-4">
              <div className="text-center mb-4">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <p className="text-sm text-gray-600">
                  A verification code has been sent to your authenticator app
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="twoFactorCode" className="text-gray-700">
                  6-Digit Verification Code
                </Label>
                <Input
                  id="twoFactorCode"
                  type="text"
                  placeholder="123456"
                  value={twoFactorCode}
                  onChange={(e) =>
                    setTwoFactorCode(
                      e.target.value.replace(/\D/g, "").slice(0, 6),
                    )
                  }
                  required
                  className="text-center text-2xl tracking-widest py-3"
                  maxLength={6}
                />
              </div>

              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1"
                  disabled={isLoading}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                  disabled={isLoading || twoFactorCode.length !== 6}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Verifying...
                    </div>
                  ) : (
                    "Verify & Login"
                  )}
                </Button>
              </div>
            </form>
          )}

          {/* Security Features */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center">
                <Shield className="h-3 w-3 mr-1" />
                <span>2FA Protected</span>
              </div>
              <div className="flex items-center">
                <KeyRound className="h-3 w-3 mr-1" />
                <span>Encrypted Session</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
