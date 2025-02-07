import React, { useState } from "react";
import {
  User,
  Mail,
  Lock,
  CreditCard,
  Bell,
  Globe,
  Smartphone,
  Shield,
  LogOut,
} from "lucide-react";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="h-screen bg-black text-white flex-1 overflow-auto">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="flex gap-8">
          {/* Settings Navigation */}
          <div className="w-64">
            <div className="bg-zinc-800/50 rounded-xl p-4">
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveSection("profile")}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                    activeSection === "profile"
                      ? "bg-green-500 text-white"
                      : "text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  <User className="h-5 w-5" />
                  Profile
                </button>
                <button
                  onClick={() => setActiveSection("security")}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                    activeSection === "security"
                      ? "bg-green-500 text-white"
                      : "text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  <Shield className="h-5 w-5" />
                  Security
                </button>
                <button
                  onClick={() => setActiveSection("payments")}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                    activeSection === "payments"
                      ? "bg-green-500 text-white"
                      : "text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                  Payments
                </button>
                <button
                  onClick={() => setActiveSection("notifications")}
                  className={`flex items-center gap-3 w-full p-3 rounded-lg ${
                    activeSection === "notifications"
                      ? "bg-green-500 text-white"
                      : "text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  <Bell className="h-5 w-5" />
                  Notifications
                </button>
              </nav>
            </div>
          </div>

          {/* Settings Content */}
          <div className="flex-1 bg-zinc-800/30 rounded-xl p-6">
            {activeSection === "profile" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
                <div className="mb-8">
                  <div className="flex items-center gap-6 mb-6">
                    <img
                      src="/api/placeholder/100/100"
                      alt="Profile"
                      className="w-24 h-24 rounded-full"
                    />
                    <button className="px-4 py-2 bg-zinc-700 rounded-lg hover:bg-zinc-600">
                      Change Photo
                    </button>
                  </div>
                  <div className="space-y-4 max-w-2xl">
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Artist Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Bio
                      </label>
                      <textarea className="w-full bg-zinc-700 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                      <label className="block text-sm text-zinc-400 mb-2">
                        Website
                      </label>
                      <input
                        type="url"
                        className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "security" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Security Settings</h2>
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <h3 className="font-medium mb-4">Change Password</h3>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">
                      Two-Factor Authentication
                    </h3>
                    <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "payments" && (
              <div>
                <h2 className="text-xl font-bold mb-6">Payment Settings</h2>
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <h3 className="font-medium mb-4">Payout Method</h3>
                    <div className="bg-zinc-700 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-6 w-6" />
                          <div>
                            <p className="font-medium">Bank Account</p>
                            <p className="text-sm text-zinc-400">****1234</p>
                          </div>
                        </div>
                        <button className="text-green-500 hover:text-green-400">
                          Edit
                        </button>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-zinc-700 rounded-lg hover:bg-zinc-600">
                      Add Payment Method
                    </button>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Payout Schedule</h3>
                    <select className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Weekly</option>
                      <option>Bi-weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "notifications" && (
              <div>
                <h2 className="text-xl font-bold mb-6">
                  Notification Settings
                </h2>
                <div className="space-y-6 max-w-2xl">
                  <div>
                    <h3 className="font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-3 bg-zinc-700 rounded-lg">
                        <span>Sales notifications</span>
                        <input
                          type="checkbox"
                          className="rounded bg-zinc-600"
                          defaultChecked
                        />
                      </label>
                      <label className="flex items-center justify-between p-3 bg-zinc-700 rounded-lg">
                        <span>Fan messages</span>
                        <input
                          type="checkbox"
                          className="rounded bg-zinc-600"
                          defaultChecked
                        />
                      </label>
                      <label className="flex items-center justify-between p-3 bg-zinc-700 rounded-lg">
                        <span>New followers</span>
                        <input
                          type="checkbox"
                          className="rounded bg-zinc-600"
                        />
                      </label>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-4">Push Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between p-3 bg-zinc-700 rounded-lg">
                        <span>Sales alerts</span>
                        <input
                          type="checkbox"
                          className="rounded bg-zinc-600"
                          defaultChecked
                        />
                      </label>
                      <label className="flex items-center justify-between p-3 bg-zinc-700 rounded-lg">
                        <span>Comments</span>
                        <input
                          type="checkbox"
                          className="rounded bg-zinc-600"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
