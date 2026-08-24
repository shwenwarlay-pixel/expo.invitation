"use client";

export function InviteActions() {
  const shareInvitation = async () => {
    const details = { title: "Shwe Nwar Lay | Expo Invitation 2026", text: "Join Shwe Nwar Lay at Booth No. 13, Pan Pacific Yangon Hotel, 4–6 September 2026.", url: window.location.href };
    if (navigator.share) await navigator.share(details);
    else await navigator.clipboard.writeText(window.location.href);
  };

  return <div className="actions"><a href="https://www.google.com/maps/search/?api=1&query=Pan+Pacific+Yangon+Hotel" target="_blank" rel="noreferrer">Get Directions <span aria-hidden="true">↗</span></a><button type="button" onClick={shareInvitation}>Share Invitation <span aria-hidden="true">↗</span></button></div>;
}
