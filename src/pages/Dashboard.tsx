import React from 'react';
import {
  Card, CardContent, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs";
import {
  Search, Users, TrendingUp, Eye, UserPlus,
  Star, DollarSign, BarChart3, Settings,
  Download, FileText
} from 'lucide-react';

const Dashboard = () => {
  const metrics = [
    { title: "Page views", value: "50.8K", change: "+24.1%", positive: true, icon: Eye },
    { title: "Monthly users", value: "23.6K", change: "-12.8%", positive: false, icon: Users },
    { title: "New sign ups", value: "756", change: "+18.2%", positive: true, icon: UserPlus },
    { title: "Subscriptions", value: "2.3K", change: "+11.3%", positive: true, icon: Star }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000, expenses: 38000 },
    { month: 'Feb', revenue: 52000, expenses: 42000 },
    { month: 'Mar', revenue: 48000, expenses: 39000 },
    { month: 'Apr', revenue: 65000, expenses: 45000 },
    { month: 'May', revenue: 58000, expenses: 41000 },
    { month: 'Jun', revenue: 72000, expenses: 48000 },
    { month: 'Jul', revenue: 68000, expenses: 46000 },
    { month: 'Aug', revenue: 75000, expenses: 50000 },
    { month: 'Sep', revenue: 82000, expenses: 55000 },
    { month: 'Oct', revenue: 79000, expenses: 52000 },
    { month: 'Nov', revenue: 88000, expenses: 58000 },
    { month: 'Dec', revenue: 95000, expenses: 62000 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="border-b border-gray-800 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Snagify</h1>
              <p className="text-sm text-gray-400">Marketing Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search..." className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 w-64" />
            </div>
            <Button variant="outline" size="sm" className="border-gray-700 text-gray-300">
              <Download className="w-4 h-4 mr-2" /> Export data
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <FileText className="w-4 h-4 mr-2" /> Create report
            </Button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">J</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 bg-black/20 backdrop-blur-sm border-r border-gray-800 min-h-screen p-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-600/20 border border-purple-500/30">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Dashboard</span>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm font-medium mb-3">All pages</p>
              {["Reports", "Products", "Task"].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 cursor-pointer">
                  <TrendingUp className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              {["Features", "Users", "Pricing", "Integrations", "Settings"].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 cursor-pointer">
                  <Settings className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">J</span>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">John Carter</p>
                  <p className="text-gray-400 text-xs">Account settings</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome back, John</h2>
            <p className="text-gray-400">Measure your advertising ROI and report website traffic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">{metric.title}</CardTitle>
                  <metric.icon className="h-4 w-4 text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className={`text-sm ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add any charts or product table here later */}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

