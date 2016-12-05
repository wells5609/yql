var yfinance = {

	quote: function(ticker, modules, formatted) {
		if (formatted == null) formatted = 'true';
		if (formatted === false || formatted == 0) {
			formatted = 'false';
		}
		var req = y.rest("https://query2.finance.yahoo.com/v10/finance/quoteSummary")
			.path(ticker)
			.query("formatted", formatted)
			.query("lang", "en-US")
			.query("region", "US")
			.query("modules", modules);
		var resp = y.xmlToJson(req.get().response);
		return resp.quoteSummary.result;
	},

	quote2: function(tickers) {	
		var req = y.rest("https://query1.finance.yahoo.com/v7/finance/quote")
			.query("lang", "en-US")
			.query("region", "US")
			.query("symbols", tickers)
			.query("fields", "symbol,longName,regularMarketPrice,regularMarketTime,regularMarketChange,regularMarketChangePercent,regularMarketVolume,averageDailyVolume3Month,shares,regularMarketDayRange,regularMarketDayLow,regularMarketDayHigh,fiftyTwoWeekRange,fiftyTwoWeekLow,fiftyTwoWeekHigh,sparkline,marketCap,messageBoardId,shortName,underlyingSymbol,underlyingExchangeSymbol,headSymbolAsString,uuid");
		var resp = y.xmlToJson(req.get().response);
		return resp.quoteResponse.result;
	}
	
};
