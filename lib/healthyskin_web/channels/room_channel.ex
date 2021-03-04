defmodule HealthyskinWeb.RoomChannel do
    use HealthyskinWeb, :channel
   
    def join("room:webrtc", %{}, socket) do
      {:ok, %{}, socket}
    end
  end
  