$(document).ready(function() {
	$('table.sortable').each(function() {
		var $table = $(this);
		
		$('th', $table).each(function(column) {
			var $header = $(this);
			var findSortKey;
			if ($header.is('.sort-alpha')) {
				findSortKey = function($cell) {
					return $cell.find('.sort-key').text().toUpperCase()
					+ ' ' + $cell.text().toUpperCase();
				};
			}
			else if ($header.is('.sort-numeric')) {
				findSortKey = function($cell) {
					var key = $cell.text().replace(/[\D,]/g, '');
					key = parseFloat(key);
					return isNaN(key) ? 0 : key;
				};
			}
			else if ($header.is('.sort-date')) {
				findSortKey = function($cell) {
					var monthFRtoEN = {
						'janv': 'Jan', 'févr': 'Feb', 'mars': 'Mar', 'avr': 'Apr',
						'mai': 'May', 'juin': 'Jun', 'juil': 'Jul', 'août': 'Aug',
						'sept': 'Sep', 'oct': 'Oct', 'nov': 'Nov', 'déc': 'Dec'
					};
					var monthFR = $cell.text().replace(/[^a-zéû]/gi, '');
					var dateEN = $cell.text().replace(monthFR,
					monthFRtoEN[monthFR.toLowerCase()]);
					return Date.parse('1 ' + dateEN);
				};
				if (findSortKey) {
					$header.addClass('clickable').hover(function() {
						$header.addClass('hover');
					}, function() {
						$header.removeClass('hover');
					}).click(function() {
						var sortDirection = 1;
						if ($header.is('.sorted-asc')) {
							sortDirection = -1;
						}
						var rows = $table.find('tbody > tr').get();
						$.each(rows, function(index, row) {
							var $cell = $(row).children('td').eq(column);
							row.sortKey = findSortKey($cell);
						});
						rows.sort(function(a, b) {
							if (a.sortKey < b.sortKey) return -sortDirection;
							if (a.sortKey > b.sortKey) return sortDirection;
							return 0;
						});
						$.each(rows, function(index, row) {
							$table.children('tbody').append(row);
							row.sortKey = null;
						});
						$table.find('th').removeClass('sorted-asc')
						.removeClass('sorted-desc');
						if (sortDirection == 1) {
							$header.addClass('sorted-asc');
						}
						else {
							$header.addClass('sorted-desc');
						}
						$table.find('td').removeClass('sorted')
						.filter(':nth-child(' + (column + 1) + ')')
						.addClass('sorted');
						$table.alternateRowColors();
						$table.trigger('repaginate');
					});
				}
			}
		});
	});
});
$(document).ready(function() {
	$('table.paginated').each(function() {
		var currentPage = 0;
		var numPerPage = 10;
		var $table = $(this);
		$table.bind('repaginate', function() {
			$table.find('tbody tr').hide()
			.slice(currentPage * numPerPage,
			(currentPage + 1) * numPerPage)
			.show();
		});
		var numRows = $table.find('tbody tr').length;
		var numPages = Math.ceil(numRows / numPerPage);
		var $pager = $('<div class="pager"></div>');
		for (var page = 0; page < numPages; page++) {
			$('<span class="page-number"></span>').text(page + 1)
			.bind('click', {newPage: page}, function(event) {
			currentPage = event.data['newPage'];
			$table.trigger('repaginate');
			$(this).addClass('active')
			.siblings().removeClass('active');
			}).appendTo($pager).addClass('clickable');
		}
		$pager.insertBefore($table)
		.find('span.page-number:first').addClass('active');
	});
});