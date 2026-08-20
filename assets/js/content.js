// Populates elements marked data-bind-text / data-bind-html / data-bind-href
// from a JSON file at content/<page>.json. If the fetch fails, the HTML's
// existing fallback copy is left in place untouched.
(function () {
    function getPath(obj, path) {
        return path.split('.').reduce(function (acc, key) {
            return acc == null ? undefined : acc[key];
        }, obj);
    }

    function applyBindings(data) {
        if (data.meta) {
            if (data.meta.title) document.title = data.meta.title;
            if (data.meta.description) {
                var metaDesc = document.querySelector('meta[name="description"]');
                if (metaDesc) metaDesc.setAttribute('content', data.meta.description);
            }
        }

        document.querySelectorAll('[data-bind-html]').forEach(function (el) {
            var val = getPath(data, el.getAttribute('data-bind-html'));
            if (val !== undefined) el.innerHTML = val;
        });
        document.querySelectorAll('[data-bind-text]').forEach(function (el) {
            var val = getPath(data, el.getAttribute('data-bind-text'));
            if (val !== undefined) el.textContent = val;
        });
        document.querySelectorAll('[data-bind-href]').forEach(function (el) {
            var val = getPath(data, el.getAttribute('data-bind-href'));
            if (val !== undefined) el.setAttribute('href', val);
        });
    }

    var page = document.body.getAttribute('data-content') ||
        document.location.pathname.split('/').pop().replace(/\.html$/, '') ||
        'index';

    fetch('content/' + page + '.json', { cache: 'no-store' })
        .then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(applyBindings)
        .catch(function (err) {
            console.warn('[content] could not load content/' + page + '.json, showing fallback copy:', err);
        });
})();
