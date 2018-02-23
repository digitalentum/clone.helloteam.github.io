(function () { 
    $(document).ready(function() {
		$('.contact-form').on('submit', function(e) {
			var form = e.currentTarget;

			if (form.checkValidity() === false) {
				e.preventDefault();
				e.stopPropagation();
			} else {
				$.ajax({
					method: 'GET',
					url: 'https://script.google.com/macros/s/AKfycbwRkoFDUoZAWUs2O9Aa6rfMl1bYXxPzVDlEz6mAzFt-e6xSSaQ/exec',
					dataType: 'jsonp',
					jsonp: 'jsonpCallback',
					data: {
						firstName: $(form).find("#firstName").val(),
						lastName: $(form).find("#lastName").val(),
						company: $(form).find("#company").val(),
						email: $(form).find("#email").val(),
						app: 'HelloTeam'
					}
				});
				
				e.preventDefault();
				e.stopPropagation();
			}

			$(form).addClass('was-validated');
		});

		window.jsonpCallback = function(data) {
			if (data.hasOwnProperty('success') && data.success) {
				var container = $('.contact-form-align-container');
				container.fadeOut({
					done: function() {
						container.empty();
						container.css('height', '52em');
						container.append('<div class="text-center align-self-center">' + 
						                 '<h2 class="text-light">Sikeresen felvettünk az Early Bird listára!</h2>' + 
										 '</div>');
						container.fadeIn();
						gtag_report_conversion();
					}
				});
			}
		}
	});
})();