'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import { 
  ChartLine, 
  Filter, 
  Briefcase, 
  Users, 
  Building, 
  Brain, 
  BarChart3, 
  Shield, 
  GraduationCap, 
  Mic, 
  Gamepad2, 
  Users2, 
  Trophy, 
  Plug, 
  Settings, 
  Search, 
  Plus, 
  Bot, 
  Bell,
  Handshake
} from 'lucide-react'

interface DashboardLayoutProps {
  children: ReactNode
  user: {
    firstName: string
    lastName: string
    email: string
    role: string
  }
}

export default function DashboardLayout({ children, user }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Handshake className="text-white text-lg" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Deal Closer™</h1>
              <p className="text-xs text-gray-500">Dealcrafter Framework</p>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {/* Dashboard */}
          <a href="/dashboard" className="nav-item active flex items-center px-3 py-2 text-sm font-medium rounded-md border-l-4 border-indigo-500 bg-indigo-50 text-indigo-600">
            <ChartLine className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          
          {/* Sales Section */}
          <div className="pt-4">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sales</p>
            <div className="mt-2 space-y-1">
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Filter className="w-5 h-5 mr-3 text-gray-400" />
                Smart Pipeline
                <span className="ml-auto bg-indigo-100 text-indigo-600 px-2 py-0.5 text-xs rounded-full">12</span>
              </a>
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Briefcase className="w-5 h-5 mr-3 text-gray-400" />
                Deals
              </a>
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Users className="w-5 h-5 mr-3 text-gray-400" />
                Stakeholders
              </a>
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Building className="w-5 h-5 mr-3 text-gray-400" />
                Accounts
              </a>
            </div>
          </div>
          
          {/* Intelligence Section */}
          <div className="pt-4">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Intelligence</p>
            <div className="mt-2 space-y-1">
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Brain className="w-5 h-5 mr-3 text-gray-400" />
                AI Insights
                <span className="ml-auto bg-green-100 text-green-600 px-2 py-0.5 text-xs rounded-full">New</span>
              </a>
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <BarChart3 className="w-5 h-5 mr-3 text-gray-400" />
                Forecasting
              </a>
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Shield className="w-5 h-5 mr-3 text-gray-400" />
                Deal War Room
              </a>
            </div>
          </div>
          
          {/* Academy Section */}
          <div className="pt-4">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Academy</p>
            <div className="mt-2 space-y-1">
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <GraduationCap className="w-5 h-5 mr-3 text-gray-400" />
                Learning Paths
              </a>
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Mic className="w-5 h-5 mr-3 text-gray-400" />
                Voice Coach
              </a>
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Gamepad2 className="w-5 h-5 mr-3 text-gray-400" />
                Simulations
              </a>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="pt-4">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Team</p>
            <div className="mt-2 space-y-1">
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Users2 className="w-5 h-5 mr-3 text-gray-400" />
                Team Performance
              </a>
              <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200">
                <Trophy className="w-5 h-5 mr-3 text-gray-400" />
                Leaderboard
              </a>
            </div>
          </div>
        </nav>
        
        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
            <Plug className="w-5 h-5 mr-3 text-gray-400" />
            Integrations
          </a>
          <a href="#" className="nav-item flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
            <Settings className="w-5 h-5 mr-3 text-gray-400" />
            Settings
          </a>
        </div>
      </aside>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search deals, accounts, or stakeholders..." 
                  className="w-96 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              </div>
              
              {/* Quick Actions */}
              <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                <Plus className="mr-2" size={16} />
                New Deal
              </button>
            </div>
            
            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* AI Assistant */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bot size={20} />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
              </button>
              
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              
              {/* User Profile */}
              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-700">{user.firstName} {user.lastName}</p>
                  <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                </div>
                <Image 
                  src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=6366f1&color=fff`}
                  alt="Profile" 
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
