# Instructions for Pushing to GitHub

Follow these steps to push your accessibility improvements to GitHub.

## Step 1: Initialize Git Repository (if not already done)

Open Terminal and navigate to your project directory:

```bash
cd "/Users/jsaaron/Desktop/Cursor Project Test"
```

Initialize a git repository:

```bash
git init
```

## Step 2: Create a .gitignore File (optional but recommended)

Create a `.gitignore` file to exclude system files:

```bash
cat > .gitignore << 'EOF'
# macOS
.DS_Store
.AppleDouble
.LSOverride

# Editor directories and files
.vscode/
.idea/
*.swp
*.swo
*~

# Logs
*.log
EOF
```

## Step 3: Stage All Changes

Add all your files to git:

```bash
git add .
```

Or add files individually:

```bash
git add index.html styles.css script.js
git add lessons/
git add github-guides/
git add design-resources.html
```

## Step 4: Make Your First Commit

Create a commit with a descriptive message:

```bash
git commit -m "Improve accessibility: add focus styles, fix color contrast, remove unused JS

- Add :focus styles for all interactive elements
- Add skip-to-content navigation link
- Fix color contrast issues (darkened text-light color)
- Remove unused JavaScript functions
- Add active navigation state styling
- Remove all decorative emoji for better accessibility
- Add comprehensive pedagogical enhancements to Lesson 04:
  * Visual box model breakdown
  * Box-sizing comparison (content-box vs border-box)
  * Common box model pitfalls section
  * Flexbox container vs items explanation
  * Row vs column comparison examples
  * Common flexbox mistakes and solutions
  * CSS Grid vs Flexbox comparison
  * Visual grid examples and responsive patterns"
```

## Step 5: Create a GitHub Repository

### Option A: Using GitHub Website

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right, then "New repository"
3. Name it (e.g., "html-css-tutorial")
4. Choose public or private
5. **DO NOT** initialize with README, .gitignore, or license (you already have these)
6. Click "Create repository"

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create html-css-tutorial --public --source=. --remote=origin --push
```

## Step 6: Connect Local Repository to GitHub

If you created the repository on GitHub website, copy the repository URL and run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/html-css-tutorial.git
```

Replace `YOUR_USERNAME` with your GitHub username.

## Step 7: Push to GitHub

Push your code to GitHub:

```bash
git branch -M main
git push -u origin main
```

If you haven't set up authentication, GitHub will prompt you to authenticate. You may need to use a Personal Access Token instead of your password.

## Alternative: Push to Existing Repository

If you already have a GitHub repository for this project:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Verification

After pushing, you can verify by:
1. Visiting your GitHub repository in a browser
2. Running: `git remote -v` to see your remotes
3. Running: `git log` to see your commit history

## Future Updates

For future changes, use this workflow:

```bash
# Check what changed
git status

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Describe your changes here"

# Push to GitHub
git push
```

## Troubleshooting

**If you get authentication errors:**
- GitHub no longer accepts passwords for HTTPS. Use a Personal Access Token:
  1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
  2. Generate new token with `repo` permissions
  3. Use the token as your password when pushing

**If you need to update an existing repository:**
```bash
git pull origin main  # Get latest changes first
git push origin main  # Then push your changes
```

**If you accidentally committed the wrong files:**
```bash
# Unstage files (but keep changes)
git reset HEAD filename

# Or unstage everything
git reset
```

