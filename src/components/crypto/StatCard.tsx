import type { Crypto } from "../../api/types";
import { Badge } from "../ui/Badge";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  crypto: Crypto;
}

export const StatCard = ({ crypto }: Props) => {
  return (
    <div className="card bg-base-100 border border-base-200 p-6 gap-2">
      <div className="flex items-center gap-3">
        <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
        <div>
          <p className="font-semibold">{crypto.name}</p>
          <p className="text-xs text-base-content/50 uppercase">{crypto.symbol}</p>
        </div>
      </div>
      <p className="text-3xl font-bold font-mono mt-2">
        {formatCurrency(crypto.current_price)}
      </p>
      <div className="flex items-center gap-4 text-sm text-base-content/60">
        <Badge value={crypto.price_change_percentage_24h} />
        <span>H : {formatCurrency(crypto.high_24h)}</span>
        <span>B : {formatCurrency(crypto.low_24h)}</span>
      </div>
    </div>
  );
};