import type { Crypto } from "../../api/types";
import { Badge } from "../ui/Badge";
import { formatCurrency } from "../../utils/formatCurrency";

interface Props {
  crypto: Crypto;
  onWatchlist: (crypto: Crypto) => void;
  isWatched: boolean;
}

export const CryptoRow = ({ crypto, onWatchlist, isWatched }: Props) => {
  return (
    <tr className="hover">
      <td className="font-medium">{crypto.market_cap_rank}</td>
      <td>
        <div className="flex items-center gap-3">
          <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
          <div>
            <p className="font-semibold">{crypto.name}</p>
            <p className="text-xs text-base-content/50 uppercase">{crypto.symbol}</p>
          </div>
        </div>
      </td>
      <td className="font-mono">{formatCurrency(crypto.current_price)}</td>
      <td>
        <Badge value={crypto.price_change_percentage_24h} />
      </td>
      <td className="text-base-content/60">{formatCurrency(crypto.market_cap)}</td>
      <td>
        <button
          onClick={() => onWatchlist(crypto)}
          className={`btn btn-ghost btn-xs ${isWatched ? "text-warning" : "text-base-content/30"}`}
        >
          ★
        </button>
      </td>
    </tr>
  );
};