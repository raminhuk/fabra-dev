import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Fabra.dev',
    description: 'Transformando Linhas de Código em Experiências Únicas',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <Header />
            <body className={inter.className}>{children}</body>
        </html>
    )
}
