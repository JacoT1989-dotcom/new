'use client'

import { useState } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus, faRobot, faBell } from '@fortawesome/free-solid-svg-icons'
import { Zap } from 'lucide-react'
import { NewDealModal } from "./NewDealModal"

export function DashboardHeader() {
  const [newDealModalOpen, setNewDealModalOpen] = useState(false);

  return (
    <header className="border-b bg-white sticky top-2 z-50">
      <div className="flex h-18 items-center px-6 gap-4">
        <SidebarTrigger />
        
        <div className="flex-1 flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search deals, accounts, or stakeholders..." 
              className="w-96 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          
          {/* Quick Actions */}
          <button 
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={() => setNewDealModalOpen(true)}
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            New Deal
          </button>
          <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
            <Zap className="w-4 h-4 mr-2" />
            AI Insights
          </Button>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* AI Assistant */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <FontAwesomeIcon icon={faRobot} className="text-xl" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></span>
          </button>
          
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <FontAwesomeIcon icon={faBell} className="text-xl" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
          </button>
          
          {/* User Profile with Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-3 pl-4 border-l border-gray-200 hover:bg-gray-50 rounded-lg p-2 transition-colors">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-700">Alex Johnson</p>
                  <p className="text-xs text-gray-500">Sales Manager</p>
                </div>
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://ui-avatars.com/api/?name=Alex+Johnson&background=6366f1&color=fff" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Stanton Hermanus</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    stanton@geniushumans.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* New Deal Modal */}
      <NewDealModal 
        open={newDealModalOpen} 
        onOpenChange={setNewDealModalOpen} 
      />
    </header>
  )
}