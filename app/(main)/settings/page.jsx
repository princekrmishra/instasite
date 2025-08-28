"use client";
import React, { useContext, useState } from "react";
import { UserDetailContext } from "@/context/UserDetails.context";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { Button } from "@/components/ui/button";

function Settings() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const UpdateUser = useMutation(api.users.UpdateUser);
  const DeleteUser = useMutation(api.users.DeleteUser);

  const [form, setForm] = useState({
    name: userDetail?.name || "",
    email: userDetail?.email || "",
    bio: userDetail?.bio || "",
    theme: "light",
    notifications: {
      email: true,
      sms: false,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = async () => {
    await UpdateUser({
      userId: userDetail?._id,
      name: form.name,
      email: form.email,
      bio: form.bio,
    });
    setUserDetail({ ...userDetail, ...form });
    alert("Settings updated successfully ✅");
  };

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete your account?")) {
      await DeleteUser({ userId: userDetail?._id });
      alert("Account deleted ❌");
      // redirect or clear context
    }
  };

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Settings</h2>

      {/* Profile Section */}
      <div className="border p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-semibold mb-4">Profile</h3>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border p-2 w-full rounded mb-3"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full rounded mb-3"
        />
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          placeholder="Write your bio..."
          className="border p-2 w-full rounded mb-3"
        />
      </div>

      {/* Preferences Section */}
      <div className="border p-6 rounded-xl mb-6">
        <h3 className="text-2xl font-semibold mb-4">Preferences</h3>

        {/* Theme Toggle */}
        <label className="flex items-center gap-3 mb-4">
          <span>Theme:</span>
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="light">🌞 Light</option>
            <option value="dark">🌙 Dark</option>
          </select>
        </label>

        {/* Notifications */}
        <div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.notifications.email}
              onChange={() =>
                setForm({
                  ...form,
                  notifications: {
                    ...form.notifications,
                    email: !form.notifications.email,
                  },
                })
              }
            />
            Email Notifications
          </label>

          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={form.notifications.sms}
              onChange={() =>
                setForm({
                  ...form,
                  notifications: {
                    ...form.notifications,
                    sms: !form.notifications.sms,
                  },
                })
              }
            />
            SMS Notifications
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <Button onClick={handleSave}>💾 Save Changes</Button>
        <Button variant="destructive" onClick={handleDelete}>
          ❌ Delete Account
        </Button>
      </div>
    </div>
  );
}

export default Settings;
