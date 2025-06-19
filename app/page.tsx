"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Target,
  Users,
  TrendingUp,
  Shield,
  BookOpen,
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { LoginModal } from "./components/LoginModal";
import { RegisterModal } from "./components/RegisterModal";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "Dealcrafter Engine™",
      description:
        "Battle-tested methodology that guides you through every phase of complex deals—mapping stakeholders, aligning pain points to value, and building powerful close plans.",
      color: "bg-blue-600 text-white",
    },
    {
      icon: Target,
      title: "AI-Enabled Sales Coaching",
      description:
        "Intelligent algorithms trained on sales behaviors recommend next-best-actions, detect gaps, and predict deal outcomes with precision.",
      color: "bg-purple-600 text-white",
    },
    {
      icon: BookOpen,
      title: "Integrated Learning Management",
      description:
        "Built-in Sales Academy with interactive modules, role-play simulations, and personalized learning paths to develop world-class closers.",
      color: "bg-green-600 text-white",
    },
    {
      icon: Users,
      title: "Stakeholder Intelligence Mapping",
      description:
        "Map influence, decision style, and power levels across buying committees. Highlight gaps before it's too late.",
      color: "bg-orange-600 text-white",
    },
    {
      icon: Shield,
      title: "Deal War Room",
      description:
        "Digital workspace for real-time collaboration, strategic action assignment, and battlecard management for each deal.",
      color: "bg-red-600 text-white",
    },
    {
      icon: BarChart3,
      title: "Smart Pipeline with Visual Deal Health",
      description:
        "Live pipeline view with Red/Yellow/Green deal health indicators based on real data, not hunches.",
      color: "bg-indigo-600 text-white",
    },
  ];

  const benefits = [
    "Control the chaos of complex enterprise selling",
    "Eliminate surprises in forecasting",
    "Reduce slippage and increase deal velocity",
    "Develop world-class closers through real-time learning",
    "Coach at scale using AI-driven insights",
    "Justify resource allocation with strategic deal scoring",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">
                  Deal Closer<span className="text-blue-600">™</span>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Features
                </a>
                <a
                  href="#benefits"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Benefits
                </a>
                <Button
                  variant="ghost"
                  onClick={() => setIsLoginOpen(true)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Login
                </Button>
                <Button
                  onClick={() => setShowRegisterModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  Features
                </a>
                <a
                  href="#benefits"
                  className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                >
                  Benefits
                </a>
                <div className="pt-2 space-y-2">
                  <Button
                    variant="ghost"
                    onClick={() => setIsLoginOpen(true)}
                    className="w-full justify-start"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => setShowRegisterModal(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 sm:py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/25 rounded-full blur-3xl animate-pulse [animation-delay:4s]"></div>

          {/* Floating Icons */}
          <div className="absolute top-20 left-10 animate-bounce [animation-delay:1s] [animation-duration:3s]">
            <div className="w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-blue-300" />
            </div>
          </div>
          <div className="absolute top-32 right-16 animate-bounce [animation-delay:2s] [animation-duration:4s]">
            <div className="w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <Target className="h-6 w-6 text-purple-300" />
            </div>
          </div>
          <div className="absolute bottom-32 left-12 animate-bounce [animation-delay:3s] [animation-duration:3.5s]">
            <div className="w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-green-300" />
            </div>
          </div>
          <div className="absolute bottom-10 right-40 animate-bounce [animation-delay:4s] [animation-duration:3s]">
            <div className="w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <Users className="h-6 w-6 text-orange-300" />
            </div>
          </div>

          {/* Geometric Shapes */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          </div>
          <div className="absolute top-1/3 right-20">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping [animation-delay:1s]"></div>
          </div>
          <div className="absolute bottom-1/3 left-16">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping [animation-delay:2s]"></div>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_width=%2760%27_height=%2760%27_viewBox=%270_0_60_60%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg_fill=%27none%27_fill-rule=%27evenodd%27%3E%3Cg_fill=%27%23ffffff%27_fill-opacity=%270.03%27%3E%3Ccircle_cx=%277%27_cy=%277%27_r=%271%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat" />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm">
              <Zap className="w-3 h-3 mr-1" />
              The First CRM Built Around The Dealcrafter Framework™
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Close Bigger Deals.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                Faster. With Precision.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              The first CRM built around The Dealcrafter Framework™—a
              battle-tested methodology for closing complex B2B deals with
              greater certainty and speed.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  47%
                </div>
                <div className="text-blue-200 text-sm">
                  Faster Deal Velocity
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  94%
                </div>
                <div className="text-purple-200 text-sm">Forecast Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  32%
                </div>
                <div className="text-green-200 text-sm">Bigger Deals</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => setShowRegisterModal(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setIsLoginOpen(true)}
                className="border-2 border-blue-300 text-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 backdrop-blur-sm px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Login to Dashboard
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Complete Sales Control Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for enterprise, SaaS, and consultative sales teams. The Deal
              Closer doesn&apos;t just help you manage your pipeline—it empowers
              you to control it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer group"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Sales Performance
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Built for B2B sales teams selling high-ticket, consultative
                solutions. Perfect for sales managers and VPs who need clearer
                deal visibility and coaching leverage.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  onClick={() => setShowRegisterModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      Deal Velocity
                    </span>
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    +47% Faster
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      Forecast Accuracy
                    </span>
                    <Target className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    94% Precision
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      Deal Size
                    </span>
                    <BarChart3 className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    +32% Bigger
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Close Bigger Deals?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of sales professionals who are already using The Deal
            Closer to transform their sales performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setShowRegisterModal(true)}
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-3 text-lg font-semibold"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setIsLoginOpen(true)}
              className="border-white text-blue-900 hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              Deal Closer<span className="text-blue-400">™</span>
            </h3>
            <p className="text-gray-400 mb-6">
              The first CRM built around The Dealcrafter Framework™
            </p>
            <div className="text-sm text-gray-500">
              2024 Deal Closer. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LoginModal open={isLoginOpen} onOpenChange={setIsLoginOpen} />
      <RegisterModal
        open={showRegisterModal}
        onOpenChange={setShowRegisterModal}
      />
    </div>
  );
}
