import { validateRequest } from '@/lib/auth/lucia'
import { redirect } from 'next/navigation'
import { DollarSign, Briefcase, Trophy, GraduationCap, ArrowUp, Lightbulb, AlertCircle, TrendingUp, X } from 'lucide-react'

export default async function DashboardPage() {
  const { user } = await validateRequest()
  
  if (!user) {
    redirect('/login')
  }

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, {user.firstName}!</h2>
        <p className="text-gray-600">Here&apos;s what&apos;s happening with your deals today.</p>
      </div>
      
      {/* AI Coach Recommendations */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white mb-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              <Lightbulb className="inline mr-2" size={20} />
              AI Coach Recommendations
            </h3>
            <div className="space-y-2">
              <p className="text-sm opacity-90">
                <AlertCircle className="inline mr-2" size={16} />
                <strong>TechCorp Deal</strong> needs stakeholder engagement - No contact with decision maker in 2 weeks
              </p>
              <p className="text-sm opacity-90">
                <TrendingUp className="inline mr-2" size={16} />
                <strong>GlobalSoft Opportunity</strong> showing positive signals - Schedule demo this week to maintain momentum
              </p>
            </div>
          </div>
          <button className="text-white/80 hover:text-white">
            <X size={20} />
          </button>
        </div>
      </div>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Pipeline Value */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Pipeline Value</h3>
            <DollarSign className="text-green-500" size={20} />
          </div>
          <p className="text-2xl font-bold text-gray-900">$2.4M</p>
          <p className="text-sm text-green-600 mt-1">
            <ArrowUp className="inline mr-1" size={14} />
            12% from last month
          </p>
        </div>
        
        {/* Active Deals */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Active Deals</h3>
            <Briefcase className="text-indigo-500" size={20} />
          </div>
          <p className="text-2xl font-bold text-gray-900">34</p>
          <div className="flex items-center mt-1 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            <span className="text-gray-600">12 in final stage</span>
          </div>
        </div>
        
        {/* Win Rate */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Win Rate</h3>
            <Trophy className="text-yellow-500" size={20} />
          </div>
          <p className="text-2xl font-bold text-gray-900">68%</p>
          <p className="text-sm text-gray-600 mt-1">Industry avg: 54%</p>
        </div>
        
        {/* Learning Progress */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Learning Progress</h3>
            <GraduationCap className="text-purple-500" size={20} />
          </div>
          <p className="text-2xl font-bold text-gray-900">85%</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
      
      {/* Active Deals Table */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Active Deals Requiring Attention</h3>
            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-700">View all deals →</a>
          </div>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <th className="pb-3">Deal Name</th>
                  <th className="pb-3">Account</th>
                  <th className="pb-3">Value</th>
                  <th className="pb-3">Stage</th>
                  <th className="pb-3">Health</th>
                  <th className="pb-3">Next Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4">
                    <div>
                      <p className="font-medium text-gray-900">TechCorp Enterprise License</p>
                      <p className="text-sm text-gray-500">Created 3 days ago</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-gray-900">TechCorp Solutions</p>
                  </td>
                  <td className="py-4">
                    <p className="font-medium text-gray-900">$450,000</p>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Proposal</span>
                  </td>
                  <td className="py-4">
                    <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
                  </td>
                  <td className="py-4">
                    <p className="text-sm text-gray-600">Follow up with decision maker</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">
                    <div>
                      <p className="font-medium text-gray-900">GlobalSoft Integration</p>
                      <p className="text-sm text-gray-500">Created 1 week ago</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-gray-900">GlobalSoft Inc.</p>
                  </td>
                  <td className="py-4">
                    <p className="font-medium text-gray-900">$120,000</p>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">Demo Scheduled</span>
                  </td>
                  <td className="py-4">
                    <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
                  </td>
                  <td className="py-4">
                    <p className="text-sm text-gray-600">Prepare demo presentation</p>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">
                    <div>
                      <p className="font-medium text-gray-900">StartupX Platform</p>
                      <p className="text-sm text-gray-500">Created 5 days ago</p>
                    </div>
                  </td>
                  <td className="py-4">
                    <p className="text-gray-900">StartupX</p>
                  </td>
                  <td className="py-4">
                    <p className="font-medium text-gray-900">$75,000</p>
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Negotiation</span>
                  </td>
                  <td className="py-4">
                    <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
                  </td>
                  <td className="py-4">
                    <p className="text-sm text-gray-600">Review contract terms</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}