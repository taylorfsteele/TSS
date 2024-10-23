import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppSidebar } from "~/components";

export const Route = createFileRoute("/dashboard/_dashboard")({
  component: DashboardLayout,
});
function DashboardLayout() {
  return (
    <AppSidebar>
      <Outlet />
    </AppSidebar>
  );
}