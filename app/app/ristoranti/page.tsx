import { MapPin } from 'lucide-react'
import { LOCATIONS } from '@/lib/site-data'

export default function AppRistorantiPage() {
  return (
    <div className="px-5 py-6 space-y-4">
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold">I Nostri Locali</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Trovaci in tutta Italia.
        </p>
      </div>

      {LOCATIONS.map((loc) => (
        <div
          key={loc.id}
          className="rounded-2xl border border-border bg-card p-5 space-y-4"
        >
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-heading font-semibold text-lg">{loc.name}</h2>
            <span className="flex-shrink-0 rounded-full bg-sage px-3 py-1 text-[10px] font-bold text-sage-foreground">
              Aperto
            </span>
          </div>

          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <span>
              {loc.address}, {loc.zip}
            </span>
          </div>

          <table className="w-full text-xs">
            <tbody>
              {loc.hours.map((h) => (
                <tr key={h.days}>
                  <td className="py-0.5 text-muted-foreground">{h.days}</td>
                  <td className="py-0.5 text-right font-semibold">{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
