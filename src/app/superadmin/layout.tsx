"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Package,
  Briefcase,
  Settings,
  LogOut,
  Building,
  UserCheck,
  PanelLeft,
  Bell,
  CreditCard,
  FileText,
  Globe,
  DollarSign,
  Mail,
  Shield,
  BarChart3,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const SuperAdminSidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      href: "/superadmin/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
      description: "Overview & Analytics",
    },
    {
      href: "/superadmin/agents",
      icon: UserCheck,
      label: "DMC Management",
      description: "Approve & Manage DMCs",
      badge: "3", // Pending approvals
    },
    {
      href: "/superadmin/subscriptions",
      icon: CreditCard,
      label: "Subscription Check",
      description: "Verify Agent Subscriptions",
      badge: "2", // Payment issues
    },
    {
      href: "/superadmin/packages",
      icon: Package,
      label: "Package Moderation",
      description: "Review & Approve Packages",
      badge: "7",
    },
    {
      href: "/superadmin/bookings",
      icon: Briefcase,
      label: "Booking Operations",
      description: "Manage All Bookings",
    },
    {
      href: "/superadmin/payouts",
      icon: DollarSign,
      label: "Payout Management",
      description: "Process DMC Payouts",
      badge: "2",
    },
    {
      href: "/superadmin/content",
      icon: FileText,
      label: "Content Management",
      description: "Banners & Static Pages",
    },
    {
      href: "/superadmin/notifications",
      icon: Mail,
      label: "Notification Center",
      description: "Email Templates & Alerts",
    },
    {
      href: "/superadmin/customers",
      icon: Users,
      label: "Customer Analytics",
      description: "User Management & Insights",
    },
    {
      href: "/superadmin/settings",
      icon: Settings,
      label: "Platform Settings",
      description: "System Configuration",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("superadmin_session");
    router.push("/superadmin");
  };

  return (
    <nav
      className={cn(
        "flex flex-col h-full bg-white border-r border-gray-200 shadow-sm",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-center border-b border-gray-200 h-16 shrink-0 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <Link
          href="/superadmin/dashboard"
          className="flex items-center gap-2 font-semibold text-white"
        >
          <Shield className="h-6 w-6" />
          <span>Super Admin</span>
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <div className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-all hover:bg-gray-100",
                  isActive
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600 font-medium"
                    : "text-gray-700 hover:text-gray-900",
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5",
                    isActive ? "text-blue-600" : "text-gray-500",
                  )}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="bg-red-100 text-red-700 text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="border-t border-gray-200 p-4 space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </nav>
  );
};

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pendingNotifications] = React.useState(5);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const pathname = usePathname();

  // Check authentication status
  React.useEffect(() => {
    const session = localStorage.getItem("superadmin_session");
    setIsAuthenticated(!!session);
  }, [pathname]);

  // If not authenticated, just render children (login page)
  if (!isAuthenticated) {
    // Hide sidebar and admin navigation for unauthenticated users
    return <div className="flex items-center justify-center min-h-screen bg-gray-50">{children}</div>;
  }

  // If authenticated, render full admin layout
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:w-72 lg:shrink-0">
        <SuperAdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Header */}
        <header className="flex h-16 items-center gap-4 border-b bg-white px-4 lg:px-6 shadow-sm">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 lg:hidden"
              >
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <SuperAdminSidebar className="w-full" />
            </SheetContent>
          </Sheet>

          {/* Breadcrumb */}
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-gray-900">
              Platform Administration
            </h1>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              {pendingNotifications > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                >
                  {pendingNotifications}
                </Badge>
              )}
            </Button>

            {/* Admin Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/admin.jpg" alt="Admin" />
                    <AvatarFallback className="bg-blue-600 text-white">
                      SA
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span className="font-medium">Super Admin</span>
                    <span className="text-xs text-gray-500">
                      admin@roam.com
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Account Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
