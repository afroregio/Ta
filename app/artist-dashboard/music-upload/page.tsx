import React, { useState } from "react";
import {
  Upload,
  Image,
  Music,
  Plus,
  X,
  Calendar,
  Type,
  Users,
  Tags,
  Radio,
  Globe,
  CheckCircle2,
} from "lucide-react";

const MusicUpload = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [uploadType, setUploadType] = useState("single");
  const [uploadProgress, setUploadProgress] = useState(0);

  const tabs = [
    { id: "upload", label: "Upload" },
    { id: "details", label: "Details" },
    { id: "artwork", label: "Artwork" },
    { id: "pricing", label: "Pricing" },
    { id: "preview", label: "Preview" },
  ];

  return (
    <div className="h-screen bg-black text-white flex-1 overflow-auto">
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Create New Release</h1>
          <div className="flex gap-4">
            <button
              className={`px-4 py-2 rounded-full ${
                uploadType === "single"
                  ? "bg-white text-black"
                  : "border border-white"
              }`}
              onClick={() => setUploadType("single")}
            >
              Single
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                uploadType === "album"
                  ? "bg-white text-black"
                  : "border border-white"
              }`}
              onClick={() => setUploadType("album")}
            >
              Album
            </button>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {tabs.map((tab, index) => (
            <div key={tab.id} className="flex items-center">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  activeTab === tab.id ? "bg-green-500" : "bg-zinc-800"
                }`}
              >
                {index + 1}
              </div>
              <span className="ml-2 text-zinc-400">{tab.label}</span>
              {index < tabs.length - 1 && (
                <div className="w-24 h-[2px] mx-4 bg-zinc-800" />
              )}
            </div>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-zinc-800/30 rounded-xl p-8">
          {activeTab === "upload" && (
            <div>
              <h2 className="text-xl font-bold mb-6">Upload Your Music</h2>
              <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center">
                <div className="max-w-md mx-auto">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-zinc-400" />
                  <h3 className="text-lg font-medium mb-2">
                    Drag and drop your music files
                  </h3>
                  <p className="text-zinc-400 mb-4">
                    Support for WAV, AIFF, FLAC or MP3
                  </p>
                  <button className="px-6 py-3 bg-green-500 rounded-full hover:bg-green-600 transition">
                    Browse Files
                  </button>
                  {uploadProgress > 0 && (
                    <div className="mt-6">
                      <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                      <p className="text-sm text-zinc-400 mt-2">
                        Uploading... {uploadProgress}%
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === "details" && (
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold mb-6">Track Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Track Title
                  </label>
                  <input
                    type="text"
                    className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter track title"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Genre
                    </label>
                    <select className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Select Genre</option>
                      <option>Hip Hop</option>
                      <option>R&B</option>
                      <option>Pop</option>
                      <option>Electronic</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">
                      Mood
                    </label>
                    <select className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Select Mood</option>
                      <option>Energetic</option>
                      <option>Relaxed</option>
                      <option>Happy</option>
                      <option>Melancholic</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Description
                  </label>
                  <textarea
                    className="w-full bg-zinc-700 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Write something about your track..."
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Tags
                  </label>
                  <input
                    type="text"
                    className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Add tags separated by commas"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === "artwork" && (
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold mb-6">Cover Artwork</h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center aspect-square flex flex-col items-center justify-center">
                  <Image className="h-12 w-12 mb-4 text-zinc-400" />
                  <h3 className="text-lg font-medium mb-2">Upload Artwork</h3>
                  <p className="text-zinc-400 mb-4">
                    3000x3000 pixels recommended
                  </p>
                  <button className="px-6 py-3 bg-green-500 rounded-full hover:bg-green-600 transition">
                    Choose Image
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Artwork Guidelines
                  </h3>
                  <ul className="space-y-3 text-zinc-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Square image (1:1 ratio)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Minimum 1400x1400 pixels
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      PNG or JPEG format
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Less than 10MB file size
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "pricing" && (
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold mb-6">Pricing & Distribution</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Price (USD)
                  </label>
                  <input
                    type="number"
                    className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter price"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Release Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-zinc-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <h3 className="font-medium mb-4">Distribution Options</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded bg-zinc-700" />
                      <span>Make available for streaming</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded bg-zinc-700" />
                      <span>Allow downloads</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="rounded bg-zinc-700" />
                      <span>Enable pre-save</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "preview" && (
            <div>
              <h2 className="text-xl font-bold mb-6">Preview Release</h2>
              <div className="bg-zinc-800 rounded-xl p-6">
                <div className="flex gap-6">
                  <img
                    src="/api/placeholder/200/200"
                    alt="Track artwork"
                    className="w-48 h-48 rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">Track Title</h3>
                    <p className="text-zinc-400 mb-4">Hip Hop · 3:45</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-zinc-400 text-sm">Release Date</p>
                        <p className="font-medium">February 14, 2024</p>
                      </div>
                      <div>
                        <p className="text-zinc-400 text-sm">Price</p>
                        <p className="font-medium">$4.99</p>
                      </div>
                      <div>
                        <p className="text-zinc-400 text-sm">Genre</p>
                        <p className="font-medium">Hip Hop</p>
                      </div>
                      <div>
                        <p className="text-zinc-400 text-sm">Mood</p>
                        <p className="font-medium">Energetic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              className="px-6 py-3 bg-zinc-700 rounded-full hover:bg-zinc-600 transition"
              onClick={() => {
                const currentIndex = tabs.findIndex(
                  (tab) => tab.id === activeTab
                );
                if (currentIndex > 0) {
                  setActiveTab(tabs[currentIndex - 1].id);
                }
              }}
            >
              Previous
            </button>
            <button
              className="px-6 py-3 bg-green-500 rounded-full hover:bg-green-600 transition"
              onClick={() => {
                const currentIndex = tabs.findIndex(
                  (tab) => tab.id === activeTab
                );
                if (currentIndex < tabs.length - 1) {
                  setActiveTab(tabs[currentIndex + 1].id);
                }
              }}
            >
              {activeTab === "preview" ? "Publish" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicUpload;
