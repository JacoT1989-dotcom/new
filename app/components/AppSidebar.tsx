'use client'

import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHandshake, 
  faChartLine, 
  faFilter, 
  faBriefcase, 
  faUsers, 
  faBuilding, 
  faBrain, 
  faChartBar, 
  faShieldAlt, 
  faGraduationCap, 
  faMicrophone, 
  faGamepad, 
  faUserFriends, 
  faTrophy, 
  faPlug, 
  faCog 
} from '@fortawesome/free-solid-svg-icons'

export function AppSidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon={faHandshake} className="text-white text-lg" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Deal Closer™</h1>
            <p className="text-xs text-gray-500">Dealcrafter Framework</p>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {/* Dashboard */}
        <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md border-l-4 border-indigo-500 bg-indigo-50 text-indigo-600 transition-all duration-200 ease-in-out">
          <FontAwesomeIcon icon={faChartLine} className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        
        {/* Pipeline */}
        <div className="pt-4">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sales</p>
          <div className="mt-2 space-y-1">
            <Link href="/pipeline" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faFilter} className="w-5 h-5 mr-3 text-gray-400" />
              Smart Pipeline
              <span className="ml-auto bg-indigo-100 text-indigo-600 px-2 py-0.5 text-xs rounded-full">12</span>
            </Link>
            <Link href="/deals" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faBriefcase} className="w-5 h-5 mr-3 text-gray-400" />
              Deals
            </Link>
            <Link href="/stakeholders-maps" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faUsers} className="w-5 h-5 mr-3 text-gray-400" />
              Stakeholders
            </Link>
            <Link href="/accounts" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faBuilding} className="w-5 h-5 mr-3 text-gray-400" />
              Accounts
            </Link>
          </div>
        </div>
        
        {/* AI & Insights */}
        <div className="pt-4">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Intelligence</p>
          <div className="mt-2 space-y-1">
            <Link href="/insights" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faBrain} className="w-5 h-5 mr-3 text-gray-400" />
              AI Insights
              <span className="ml-auto bg-green-100 text-green-600 px-2 py-0.5 text-xs rounded-full">New</span>
            </Link>
            <Link href="/forecasting" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faChartBar} className="w-5 h-5 mr-3 text-gray-400" />
              Forecasting
            </Link>
            <Link href="/war-rooms" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faShieldAlt} className="w-5 h-5 mr-3 text-gray-400" />
              Deal War Room
            </Link>
          </div>
        </div>
        
        {/* Learning */}
        <div className="pt-4">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Academy</p>
          <div className="mt-2 space-y-1">
            <Link href="/academy" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5 mr-3 text-gray-400" />
              Learning Paths
            </Link>
            <Link href="/ai-coach" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faMicrophone} className="w-5 h-5 mr-3 text-gray-400" />
              Voice Coach
            </Link>
            <Link href="/simulations" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faGamepad} className="w-5 h-5 mr-3 text-gray-400" />
              Simulations
            </Link>
          </div>
        </div>
        
        {/* Team */}
        <div className="pt-4">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Team</p>
          <div className="mt-2 space-y-1">
            <Link href="/team" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faUserFriends} className="w-5 h-5 mr-3 text-gray-400" />
              Team Performance
            </Link>
            <Link href="/leaderboard" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md border-l-4 border-transparent hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
              <FontAwesomeIcon icon={faTrophy} className="w-5 h-5 mr-3 text-gray-400" />
              Leaderboard
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <Link href="/integrations" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
          <FontAwesomeIcon icon={faPlug} className="w-5 h-5 mr-3 text-gray-400" />
          Integrations
        </Link>
        <Link href="/settings" className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-indigo-50 hover:border-indigo-500 transition-all duration-200 ease-in-out">
          <FontAwesomeIcon icon={faCog} className="w-5 h-5 mr-3 text-gray-400" />
          Settings
        </Link>
      </div>
    </aside>
  )
}