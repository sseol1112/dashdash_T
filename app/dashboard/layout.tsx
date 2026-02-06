import SlideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <SlideNav />
            <main className="flex-1">{children}</main>
        </div>
    );
}  