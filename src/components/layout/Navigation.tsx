import { useState } from 'react';
import {
  Home,
  Play,
  Trophy,
  Library,
  FileText,
  BookOpen,
  Tag,
  Upload,
  BarChart3,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  LogOut,
  User as UserIcon
} from 'lucide-react';
import { Sidebar, SidebarBody, SidebarLink } from '../ui/animated-sidebar';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Navigation({ currentView, onViewChange }: NavigationProps) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, roles: ['agent', 'coach', 'admin'] },
    { id: 'quiz', label: 'Take Quiz', icon: Play, roles: ['agent', 'coach', 'admin'] },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy, roles: ['agent', 'coach', 'admin'] },
    { id: 'cx-codex', label: 'CX Codex', icon: Library, roles: ['agent', 'coach', 'admin'] },
    { id: 'manage-questions', label: 'Questions', icon: FileText, roles: ['coach', 'admin'] },
    { id: 'manage-topics', label: 'Topics', icon: BookOpen, roles: ['coach', 'admin'] },
    { id: 'manage-categories', label: 'Categories', icon: Tag, roles: ['coach', 'admin'] },
    { id: 'quiz-import', label: 'Import Quizzes', icon: Upload, roles: ['admin'] },
    { id: 'analytics', label: 'Audit Log', icon: BarChart3, roles: ['coach', 'admin'] },
    { id: 'manage-users', label: 'Users', icon: Users, roles: ['admin'] },
    { id: 'settings', label: 'Settings', icon: Settings, roles: ['admin'] }
  ];

  const filteredItems = navigationItems.filter(item =>
    item.roles.includes(user?.role || 'agent')
  );

  const links = filteredItems.map(item => ({
    label: item.label,
    icon: <item.icon className="text-[#0f172a] h-5 w-5 flex-shrink-0" />,
    onClick: () => onViewChange(item.id)
  }));

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {open ? <Logo /> : <LogoIcon />}
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                isActive={currentView === filteredItems[idx].id}
              />
            ))}
          </div>
        </div>
        <div>
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className={cn(
                  "flex items-center gap-2 p-2 rounded-full cursor-pointer hover:bg-white/50 transition-colors",
                  open ? "bg-white shadow-sm border border-gray-100" : ""
                )}>
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0 overflow-hidden" style={{
                    background: user.avatar ? 'transparent' : 'linear-gradient(135deg, #5b21b6, #8b5cf6)'
                  }}>
                    {user.avatar ? (
                      <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                    ) : (
                      user.name?.split(' ').map(n => n[0]).join('').toUpperCase()
                    )}
                  </div>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col flex-1 min-w-0"
                    >
                      <span className="text-sm font-medium text-[#0f172a] truncate">{user.name}</span>
                      <span className="text-xs text-[#0f172a]/60 truncate capitalize">{user.role}</span>
                    </motion.div>
                  )}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-60 p-2" side="top" sideOffset={8}>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-[#0f172a]">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    <p className="text-xs font-bold mt-1 text-[#7c3aed] uppercase tracking-wider">{user.role}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => onViewChange('settings')}>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onViewChange('settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </SidebarBody>
    </Sidebar>
  );
}

const Logo = () => {
  return (
    <div className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20">
      <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #5b21b6, #8b5cf6)'
      }}>
        <Brain className="h-5 w-5 text-white" />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-bold text-[#0f172a] whitespace-pre"
      >
        CX Ultra Quiz
      </motion.span>
    </div>
  );
};

const LogoIcon = () => {
  return (
    <div className="font-normal flex space-x-2 items-center text-sm py-1 relative z-20">
      <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{
        background: 'linear-gradient(135deg, #5b21b6, #8b5cf6)'
      }}>
        <Brain className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};
