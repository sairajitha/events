import { useRef, useState } from "react";

export default function CreateEventPage() {

  const [priority, setPriority] = useState("medium");
  const [locationType, setLocationType] = useState("physical");

  const [keywords, setKeywords] = useState([]);
  const [input, setInput] = useState("");

  const addKeyword = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      e.preventDefault();
      setKeywords([...keywords, input.trim()]);
      setInput("");
    }
  };

  const removeKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };


  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-purple-100 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Create New Event
          </h1>
          <p className="text-gray-600 mt-1">
            Fill in the details below to schedule an event for the President's calendar
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">

        {/* BASIC INFO */}
        <div className="bg-white rounded-xl shadow-lg p-6 border-gray-200 border">

          <h2 className="text-xl font-semibold mb-6">
            Basic Information
          </h2>

          <div className="space-y-5">

            <div>
              <label className="font-medium">
                Event Title *
              </label>
              <input
                type="text"
                placeholder="e.g., National Security Briefing"
                className="w-full mt-2 border border-gray-300 rounded-lg p-3"
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter a clear, descriptive title for the event
              </p>
            </div>

            <div>
              <label className="font-medium">Event Type *</label>
              <select className="w-full mt-2 border border-gray-300 rounded-lg p-3">
                <option>Select event type</option>
                <option>Meeting</option>
                <option>Briefing</option>
                <option>Ceremony</option>
                <option>Speech</option>
                <option>Travel</option>
              </select>
            </div>

            {/* Priority */}
            <div>
              <label className="font-medium mb-2 block">
                Priority Level *
              </label>

              <div className="grid grid-cols-3 gap-4">

                {["high", "medium", "low"].map((item) => {
                    const color =
                        item === "high"
                        ? "bg-red-500"
                        : item === "medium"
                        ? "bg-yellow-400"
                        : "bg-green-500";

                    return (
                        <label
                        key={item}
                        className={`border border-gray-300 rounded-lg p-4 flex items-center gap-2 cursor-pointer ${
                            priority === item ? "border-blue-500 bg-blue-50" : ""
                        }`}
                        >
                        <input
                            type="radio"
                            name="priority"
                            checked={priority === item}
                            onChange={() => setPriority(item)}
                        />

                        <span className="capitalize flex items-center gap-2">
                            <small className={`p-1 rounded ${color}`}></small>
                            {item} Priority
                        </span>
                        </label>
                    );
                    })}
              </div>
            </div>

            <div>
              <label className="font-medium">Event Description *</label>
              <textarea
                rows="4"
                placeholder="Provide a detailed description..."
                className="w-full mt-2 border rounded-lg p-3"
              ></textarea>
            </div>

          </div>
        </div>

        {/* DATE & TIME */}

        <div className="bg-white rounded-xl shadow-lg border-gray-300 p-6 border">

          <h2 className="text-xl font-semibold mb-6">
            Date & Time
          </h2>

          <div className="grid grid-cols-2 gap-5">

            <div>
              <label>Event Date *</label>
              <input
                type="date"
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label>Start Time *</label>
              <input
                type="time"
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label>End Time *</label>
              <input
                type="time"
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label>Duration</label>
              <div className="mt-2 border rounded-lg p-3 bg-gray-50">
                1 hour 30 minutes
              </div>
            </div>

          </div>

          <div className="mt-4 flex items-center gap-2">
            <label>
            <input type="checkbox" /> All-day event</label>
          </div>

        </div>

        {/* LOCATION */}

        <div className="bg-white rounded-xl shadow-lg border-gray-300 p-6 border">

          <h2 className="text-xl font-semibold mb-6">
            Location
          </h2>

          <div className="space-y-5">

            <div>
              <label className="font-medium">
                Location Type *
              </label>

              <div className="grid grid-cols-3 gap-4 mt-2">

                {["physical", "virtual", "hybrid"].map((type) => (
                  <label
                    key={type}
                    className={`border rounded-lg p-4 cursor-pointer ${
                      locationType === type ? "border-blue-500 bg-blue-50" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      checked={locationType === type}
                      onChange={() => setLocationType(type)}
                    />
                    <span className="ml-2 capitalize">
                      {type} Location
                    </span>
                  </label>
                ))}

              </div>
            </div>

            <div>
              <label>Location Details *</label>
              <input
                type="text"
                placeholder="e.g., Oval Office, Cabinet Room"
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label>Full Address (Optional)</label>
              <textarea
                rows="2"
                className="w-full mt-2 border rounded-lg p-3"
              ></textarea>
            </div>

          </div>

        </div>

        {/* ATTENDEES */}

        <div className="bg-white rounded-xl shadow-lg border-gray-300 p-6 border">

          <h2 className="text-xl font-semibold mb-6">
            Attendees & Participants
          </h2>

          <div className="space-y-5">

            <div>
                    <label className="font-medium">Keywords</label>

                    <input
                        type="text"
                        placeholder="Type keyword and press Enter"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={addKeyword}
                        className="w-full mt-2 border rounded-lg p-3"
                    />

                    <div className="flex gap-2 mt-3 flex-wrap">
                        {keywords.map((word, index) => (
                        <span
                            key={index}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                        >
                            {word}
                            <button
                            onClick={() => removeKeyword(index)}
                            className="text-blue-700 font-bold"
                            >
                            ×
                            </button>
                        </span>
                        ))}
                    </div>
                    </div>

            <div>
              <label>Expected Total Attendance</label>
              <input
                type="number"
                placeholder="e.g., 15"
                className="w-full mt-2 border rounded-lg p-3"
              />
              <p className="text-sm text-gray-600 mt-2">
                Approximate number of people expected to attend
            </p>
            </div>

          </div>

        </div>

        {/* ADDITIONAL DETAILS */}

        <div className="bg-white rounded-xl shadow-lg border-gray-300 p-6 border">

          <h2 className="text-xl font-semibold mb-6">
            Additional Details
          </h2>

          <div className="space-y-5">

            <div>
              <label>Preparation Required</label>
              <textarea
                rows="3"
                className="w-full mt-2 border rounded-lg p-3"
                placeholder="List any briefing materials, documents, or preparation the President needs before this event..."
              ></textarea>
            </div>

            <div>
              <label>Special Requirements</label>
              <textarea
                rows="3"
                className="w-full mt-2 border rounded-lg p-3"
                placeholder="Security protocols, media presence, dress code, or any other special requirements..."
              ></textarea>
            </div>

            <div className="space-y-2">

              <label className="flex gap-2">
                <input type="checkbox" />
                Media coverage allowed
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />
                Requires security clearance
              </label>

              <label className="flex gap-2">
                <input type="checkbox" />
                Send reminder 24 hours before
              </label>

              <label className="flex gap-2">
                <input type="checkbox" defaultChecked />
                Request President's confirmation
              </label>

            </div>

          </div>

        </div>

        {/* ATTACHMENTS */}

         <div className="bg-white rounded-xl shadow-lg border-gray-300 p-6 border">
            <h2 className="text-xl font-semibold mb-6">
                Attachments & Documents
            </h2>

            <div
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="border-2 border-dashed border-gray-300 hover:border-gray-600 rounded-lg p-10 text-center cursor-pointer hover:bg-gray-50"
            >
                <p className="font-semibold">
                Click to upload or drag and drop
                </p>

                <p className="text-sm text-gray-500">
                PDF, DOC, XLS (Max 10MB)
                </p>

                <input
                type="file"
                multiple
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                />
            </div>

            {/* Uploaded Files */}
            <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
                >
                    <span className="text-sm">{file.name}</span>

                    <button
                    onClick={() => removeFile(index)}
                    className="text-gray-500 hover:text-red-500 text-lg font-bold"
                    >
                    ×
                    </button>
                </div>
                ))}
            </div>
            </div>

        {/* PERSONAL NOTE */}

        <div className="bg-purple-50 border-l-4 border-purple-500 rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            Personal Note to President
          </h2>

          <textarea
            rows="4"
            className="w-full border rounded-lg p-3"
            placeholder="Add a personal message or important context for the President about this event..."
          ></textarea>

          <p className="text-sm text-gray-600 mt-2">
            This note will be visible only to the President.
          </p>

        </div>

        {/* BUTTONS */}

        <div className="flex gap-4">

          <button className="flex-1 border rounded-lg font-semibold py-3">
            Save as Draft
          </button>

          <button className="flex-1 border rounded-lg font-semibold py-3">
            Preview Event
          </button>

          <button className="flex-1 bg-purple-600 text-white font-semibold rounded-lg py-3">
            Post Event to Calendar
          </button>

        </div>

        {/* INFO BOX */}

        <div className="bg-blue-50 border rounded-lg p-4 text-sm text-gray-700">

          Once posted, the President will receive a notification and can respond with their attendance status. You'll be notified of any questions or changes requested.

        </div>

      </div>

    </div>
  );
}